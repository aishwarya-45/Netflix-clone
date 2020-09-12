import React, { useEffect, useState } from 'react'
import img from './Netflix (1).png'
import img_1 from './net_logo.png'
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src={img_1}
            alt="Netflix Logo"
            />

            <img
            className="nav_avatar"
            src = {img}
            alt="Netflix Logo"
            />
        </div>
    );
}

export default Nav
