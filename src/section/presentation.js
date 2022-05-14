import React, { useState } from "react";

import './styles/presentation.css';

function Presentation() {
    return (
        <div className="presentation">
            <div className="presentationContent">
                <div className="columnLeft">
                    <a href="https://github.com/alessandro1234-tech"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/alessandro-mariani-7a53981aa/"><i className="fa fa-linkedin"></i></a>
                </div>
                <div className="contentColumn">
                    <div className="columnContent">
                        <h1>Alessandro Mariani</h1>
                        <h2>I build things</h2>
                        <p>I am a student of high school student in the computer science.<br></br>I create applications, scripts, tools of any kind and more.</p>
                    </div>
                    <div className="socialBottomBar">
                        <a href="https://github.com/alessandro1234-tech"><i className="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/alessandro-mariani-7a53981aa/"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Presentation;