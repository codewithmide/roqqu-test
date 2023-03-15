import React from "react";
import './styles/header.css'
import roqquLogo from '../assets/roqqu-white-logo.svg';

export default function Header() {
    return (
        <div className="header-wrapper">
            <img src={roqquLogo} alt="roqquLogo" />
        </div>
    )
}