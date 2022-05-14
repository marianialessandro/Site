import React from "react";

import './styles/skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="skillContent">
                <h1 className="sectionTitle">Skills</h1>
                <div className="row">
                    <div className="column">
                        <h1 className="columnValue">Languages</h1>
                        <ul>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />C++</li>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />Java</li>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />Swift</li>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />Html and CSS</li>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />Javascript</li>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />Python</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1 className="columnValue">Libraries and Frameworks</h1>
                        <ul>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />React</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1 className="columnValue">Tools</h1>
                        <ul>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />Git</li>
                            <li className="listItem"><FontAwesomeIcon className="arrow" icon={faCaretRight} />Github</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;