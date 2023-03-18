
import { Link } from "react-router-dom";
import { useState } from 'react'
import React from 'react'
import ReactDom from 'react-dom'
import './App.css'




function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li> <Link to="/">Services</Link> </li>
                    <li> <Link to="/">Location</Link> </li>
                    <li> <Link to="/">Careers</Link> </li>
                    <li> <Link to="/">Contact</Link> </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer; 