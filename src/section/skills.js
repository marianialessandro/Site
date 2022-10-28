import React from "react";

import './styles/skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {

    const languages = [
        "C",
        "C++",
        "Java for mobile, desktop, and server side applications",
        "Swift for iOS applications",
        "Html and CSS",
        "Javascript for frontend and backend",
        "PHP",
        "Python"
    ];

    const libAndFrameworks = [
        "React",
        "Bootstrap"
    ];

    const tools = [
        "Git",
        "GitHub",
        "Jetbrains' tools"
    ]

    return (
        <div className="skills">
            <div className="skillContent">
                <h1 className="sectionTitle" >Skills</h1>
                <Container>
                    <Row>
                        <Col sm={5}>
                            <h1 className="columnTitle">Languages</h1>

                            <ul>
                                {
                                    languages.map(item =>(
                                        <li className="listItem" key={item}><FontAwesomeIcon className="arrow" icon={faCaretRight} /><span>{item}</span></li>
                                    ))
                                }
                            </ul>
                        </Col>

                        <Col sm={3}>
                            <h1 className="columnTitle">Libraries and Frameworks</h1>

                            <ul>
                                {
                                    libAndFrameworks.map(item =>(
                                        <li className="listItem" key={item}><FontAwesomeIcon className="arrow" icon={faCaretRight} />{item}</li>
                                    ))
                                }
                            </ul>
                        </Col>

                        <Col sm={3}>
                            <h1 className="columnTitle">Tools</h1>

                            <ul>
                                {
                                    tools.map(item =>(
                                        <li className="listItem" key={item}><FontAwesomeIcon className="arrow" icon={faCaretRight} />{item}</li>
                                    ))
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

    /*
    return (
        <>
            <Container>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
            </Container>
        </>
    );
     */
}

export default Skills;