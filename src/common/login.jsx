/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import returnBtn from '../assets/arrow-return.svg'

export default function LoginBtn() {
    return (
        <div className="login">
        Already have an account? <a href="#">Login</a>
        <img src={returnBtn} alt='return-btn' />
        </div>
    )
}