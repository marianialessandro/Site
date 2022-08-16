import * as React from 'react';

import "./styles/about.css";

function About() {
    return (
        <div className="about" id="about">
            <div className="aboutContent">
                <h1 className="sectionTitle" >About me</h1>
                <div className="row">
                    <div className="column2">
                        <div className="descriptionParagraph">
                        <p className="description first">My name is Alessandro Mariani, I am a high school student in the computer sector close to graduation.</p>
                        <p className="description middle">I like creating tools and scripts of any kind to automate tedious and repetitive tasks. Lately I have been interested in the development of static and dynamic interfaces and web pages.</p>
                    </div>
                    </div>
                    <div className="photoSection">
                        <img src="https://marianialessandro.com/profilepicture/alessandromariani" id="foto"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
