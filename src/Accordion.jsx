import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
        <div key={1} className="accordion-item">
            <button className="accordion-header" onClick={() => toggle(1)}>
                About
            </button>
            <Collapse className="collapse" isOpened={openIndex === 1}>
                <div className={`accordion-content ${openIndex === 1 ? 'open' : 'closed'}`}>
                    <p>
                        Hi! I'm Sachin. I'm a junior majoring Computer Science at Yale, from Coventry, UK. See the projects tab for some of my projects!
                    </p>
                    <p>
                        I also care a lot about Urban Studies and Planning, policy, and read a little too much. Click on Contact to get in touch :)
                    </p>
                </div>
            </Collapse>
        </div>

        <div key={2} className="accordion-item">
            <button className="accordion-header" onClick={() => toggle(2)}>
                Projects
            </button>
            <Collapse className="collapse" isOpened={openIndex === 2}>
                <div className={`accordion-content ${openIndex === 2 ? 'open' : 'closed'}`}>
                    <p>
                        
                    </p>
                </div>
            </Collapse>
        </div>

        <div key={3} className="accordion-item">
            <button className="accordion-header" onClick={() => toggle(3)}>
                Contact
            </button>
            <Collapse className="collapse" isOpened={openIndex === 3}>
                <div className={`accordion-content ${openIndex === 3 ? 'open' : 'closed'}`}>
                    <p>
                        Reach me through the following sites:
                    </p>

                    <ul>
                    <li><a href="https://linkedin.com/in/sachinthakrar" target="_blank" class="link">
                    <span>LinkedIn</span>
                    <svg class="link__scribbe" width="100%" height="9" viewBox="0 0 101 9"><path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1"/></svg>
                    </a></li>

                    <li><a href="https://github.com/hoixw" target="_blank" class="link">
                    <span>Github</span>
                    <svg class="link__scribbe" width="100%" height="9" viewBox="0 0 101 9"><path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1"/></svg>
                    </a></li>

                    <li><a class="link">Email: </a><a class="link" href="mailto:contact@sachinthakrar.me">
                    <span>contact@sachinthakrar.me</span>
                    <svg class="link__scribbe" width="100%" height="9" viewBox="0 0 606 9"><path d="M.852 1.973C8.288 1.567 35.54-.514 42.886 1.48 48.592 3.026 49.688 4.627 55 7 61.15 9.748 68.284 2.859 75.132 2.312 90.166 1.112 101.606 7.737 110.312 5.057 117 3 120.928-1.786 132 2 135.992 3.365 138.348 5.737 142.572 6.41 153.418 8.137 196-3 206 2 211.706 3.546 212.802 5.147 218.114 7.52 224.264 10.268 231.398 3.379 238.246 2.832 253.28 1.632 264.72 8.257 273.426 5.577 280.114 3.52 284.042-1.266 295.114 2.52 299.106 3.885 301.462 6.257 305.686 6.93 316.532 8.657 359.114-2.48 369.114 2.52 374.82 4.066 375.916 5.667 381.228 8.04 387.378 10.788 394.512 3.899 401.36 3.352 416.394 2.152 427.834 8.777 436.54 6.097 443.228 4.04 447.156-.746 458.228 3.04 462.22 4.405 464.576 6.777 468.8 7.45 479.646 9.177 522.228-1.96 532.228 3.04 537.934 4.586 539.03 6.187 544.342 8.56 550.492 11.308 557.626 4.419 564.474 3.872 579.508 2.672 590.948 9.297 599.654 6.617" pathLength="1"/></svg>
                    </a></li>

                    </ul>
                </div>
            </Collapse>
        </div>
    </div>
  );
};

export default App;
