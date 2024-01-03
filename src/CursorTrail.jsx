// CursorTrail.jsx
import React, { Component } from 'react';

class CursorTrail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trail: [],
            prevX: window.innerWidth / 2, 
            prevY: window.innerHeight / 2,
            isIdle: false,
            isGeneratingRandomLines: false,
        };
        this.canvasRef = React.createRef();
        this.minRandomStartDelay = 200; 
        this.maxRandomStartDelay = 2000; 
        this.lastInputTime = Date.now();
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('touchmove', this.handleTouchMove);
        requestAnimationFrame(this.renderLines);
        this.checkUserInputTimeoutInterval = setInterval(this.checkUserInputTimeout, 500);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('touchmove', this.handleTouchMove);
        clearInterval(this.checkUserInputTimeoutInterval);
        this.stopRandomLineGeneration();
    }

    handleMouseMove = (e) => {
        this.updateTrail(e.clientX, e.clientY, 0);
        this.resetIdleTimer(); // Reset the idle timer on mouse movement
        this.stopRandomLineGeneration(); // Ensure random line generation stops
    };

    handleTouchMove = (e) => {
        e.preventDefault();
        var touch = e.touches[0];
        this.updateTrail(touch.clientX, touch.clientY, 0);
        this.resetIdleTimer();
        this.stopRandomLineGeneration();
    };

    resetIdleTimer = () => {
        this.lastInputTime = Date.now(); // Update the last input time
        if (this.state.isGeneratingRandomLines) {
            this.stopRandomLineGeneration(); // Stop random line generation if it's happening
        }
    };

    updateTrail = (x, y, inputType) => {
        const weight = 0.8;
        const trail = this.state.trail;
        const lastPoint = trail[trail.length - 1];

        if (!lastPoint) {
            this.setState({ trail: [{ x, y }] });
        } else if (inputType === 0) {
            const newX = lastPoint.x + weight * (x - lastPoint.x);
            const newY = lastPoint.y + weight * (y - lastPoint.y);

            const minSpeed = 6;
            let minDistance = 20;
            if (this.state.prevX !== null && this.state.prevY !== null) {
                const distance = Math.sqrt(
                    (x - this.state.prevX) ** 2 + (y - this.state.prevY) ** 2
                );
                if (distance > minSpeed) {
                    minDistance = 20 + distance * (distance / 5);
                }
            }

            const distance = Math.sqrt(
                (newX - lastPoint.x) ** 2 + (newY - lastPoint.y) ** 2
            );

            if (distance >= minDistance) {
                this.setState({ trail: [...trail, { x: newX, y: newY }] });
            }
        } else {
            this.setState({ trail: [...trail, { x, y }] });
        }

        this.setState({ prevX: x, prevY: y });
        requestAnimationFrame(this.renderLines);
    };

    randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    numMap(value, oldMin, oldMax, newMin, newMax) {
        return (value - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
    }

    setRandomInterval(intervalFunction, minDelay, maxDelay) {
        let timeout;

        const runInterval = () => {
            const timeoutFunction = () => {
                intervalFunction();
                runInterval();
            };

            const delay = this.randomInRange(minDelay, maxDelay);
            timeout = setTimeout(timeoutFunction, delay);
        };

        runInterval();

        return {
            clear() { clearTimeout(timeout); },
        };
    }

    randomLine = () => {
        const canvas = this.canvasRef.current;
        const randomX = this.state.prevX + this.randomInRange(
            -canvas.width * this.numMap(this.state.prevX, 0, canvas.width, 0.1, 0.5),
            canvas.width * this.numMap(this.state.prevX, 0, canvas.width, 0.5, 0.1)
        );
        const randomY = this.state.prevY + this.randomInRange(
            -canvas.height * this.numMap(this.state.prevY, 0, canvas.height, 0.1, 0.5),
            canvas.height * this.numMap(this.state.prevY, 0, canvas.height, 0.5, 0.1)
        );

        this.updateTrail(randomX, randomY, 1);
        this.renderLines();

        this.setState({
            prevX: randomX,
            prevY: randomY
        });
    };

    startRandomLineGeneration = () => {
        if (!this.state.isGeneratingRandomLines) {
            this.setState({ isGeneratingRandomLines: true });
            this.randomLine();
            clearTimeout(this.checkUserInputTimeout);
            this.randomLinesInterval = this.setRandomInterval(this.randomLine, this.minRandomStartDelay, this.maxRandomStartDelay);
        }
    };

    stopRandomLineGeneration = () => {
        if (this.state.isGeneratingRandomLines) {
            this.randomLinesInterval.clear(); 
            this.setState({ isGeneratingRandomLines: false }); 
        }
    };

    checkUserInputTimeout = () => {
        const currentTime = Date.now();
        if (currentTime - this.lastInputTime >= 1200 && !this.state.isGeneratingRandomLines) {
            this.startRandomLineGeneration();
        }
    };

    renderLines = () => {
        const canvas = this.canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            // Clear the existing drawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Begin drawing the line
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; // White-ish grey with some transparency for softness
            ctx.lineWidth = 0.8; // Thinner line
            this.state.trail.forEach((point, index) => {
                if (index === 0) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            });
            ctx.stroke();
        }
    };

    render() {
        return (
            <canvas
                ref={this.canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
            ></canvas>
        );
    }

    
}

export default CursorTrail;
