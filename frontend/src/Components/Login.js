import React from "react";
import './Login.css'

const Login = () => {
    return (
        <>
        <div className="screen">
        <div className="screen1">
            <div className="screen2">
                <div>
                    <h2>Sign in</h2>
                    <p><i class="fa-solid fa-xmark fa-xl"></i></p>
                </div>
                <div className="become">
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                </div>
                <div className="email">
                    <p>Email*</p>
                </div>
                <div className="email1">
                    <p></p>
                </div>
                <div className="password">
                    <p>Password*</p>
                </div>
                <div className="password1">
                    <p>SHOW</p>
                </div>
                <div className="remember">
                    <p></p>
                    <p>Remember me</p>
                    <p>Forgot password?</p>
                </div>
                <div className="remember1">
                    <p>Sign in</p>
                </div>
                <div className="remember2">
                    <p>Become a member</p>
                </div>
                <p className="info">Membership info</p>
            </div>
        </div>
    </div>
        </>
    )
}

export default Login;