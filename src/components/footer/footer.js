import React, { useState } from "react";
import "./footer.css";

function Footer() {

    let getActualYear = () =>{
        return new Date().getFullYear();
    }

    return (
        <footer>
            <p>
                Copyright © {getActualYear()} <a href="#">Alessandro Mariani</a> All rights reserved
            </p>
        </footer>
    );
}
  
export default Footer;
