import React from "react";
import "./styles/contact.css";

function Contacts() {
    return (
        <div className="contacts" id="contacts">
            <div className="contactsContent">
                <h1 className="sectionTitle" >Contact me</h1>

                <p>If you want to get in touch with me you can send me an email or a message on twitter or instagram, i'll try my best to get back to you.</p>

                <div className="iconContainer">
                    <a href="https://twitter.com/Alessan42045415" className="twitter"><i className="fa fa-twitter"></i></a> 
                    <a href="https://www.instagram.com/_alessandromariani.03_/" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/alessandro-mariani-7a53981aa/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href="mailto:business@marianialessandro.com" className="envelope"><i className="fa fa-envelope"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;