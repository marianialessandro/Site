import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

import './styles/presentation.css';

function Presentation() {
    return (
        <div className="presentation">
            <div className="presentationContent">
                <div className="columnLeft">
                    <a href="https://github.com/marianialessandro"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/alessandro-mariani-7a53981aa/"><i className="fa fa-linkedin"></i></a>
                </div>
                <div className="contentColumn">
                    <div className="columnContent">
                    <TypeWriterEffect

                        loop={true}

                        startDelay={100}
                        cursorColor="white"
                        text="Alessandro Mariani"
                        typeSpeed={100}
                    />

                        <h2>I build things</h2>
                        <p>
                            Computer science student at the University of Pisa. <br />
                            I like creating applications, scripts, tools of any kind and more.
                        </p>
                    </div>
                    <div className="socialBottomBar">
                        <a href="https://github.com/marianialessandro"><i className="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/alessandro-mariani-7a53981aa/"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Presentation;
