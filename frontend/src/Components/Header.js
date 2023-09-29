import React from "react";
import './Header.css'

const Header = () => {

    return (
        <>
        <div className="screen10">
        <div className="navbar">
            <div>
                <div className="custom">
                    <p>Customer Service</p>
                    <p>Newsletter</p>
                    <p>Find a store</p>
                </div>
                <div className="hm">
                    <p>H & M</p>
                </div>
                <div className="sign">
                    <p><i class="fa-regular fa-user fa-xl" style={{color: "#121212"}}></i></p>
                    <p>Sign in</p>
                    <p><i class="fa-regular fa-heart fa-xl" style={{color: "#00080f"}}></i></p>
                    <p>Favourite</p>
                    <p><i class="fa-solid fa-bag-shopping fa-xl" style={{color: "#1a1a1a"}}></i></p>
                    <p>Shopping bag (0)</p>
                </div>
            </div>
        </div>

        <div className="leftright">
            <div className="left">
                <p>Ladies</p>
                <p>Men</p>
                <p>Divided</p>
                <p>Baby</p>
                <p>Kids</p>
                <p>H&M HOME</p>
                <p>Sport</p>
                <p>Sustainability</p>
                <p>Sale</p>
            </div>
            <div className="right">
                <div>
                    <p><i class="fa-solid fa-magnifying-glass fa-xl" style={{color: "#090404"}}></i></p>
                    <p>Search Products</p>
                </div>
                <div></div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Header;