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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        nunc justo, sagittis at lobortis vel, varius nec purus.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        nunc justo, sagittis at lobortis vel, varius nec purus.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        nunc justo, sagittis at lobortis vel, varius nec purus.
                    </p>
                </div>
            </Collapse>
        </div>
    </div>
  );
};

export default App;
