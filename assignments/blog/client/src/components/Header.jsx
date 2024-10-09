import React from "react";
import { Link, Route } from "react-router-dom";
import "./header.css"

function Header() {

    return (
        <header>
            <div className="header-title">
                {/* Website title linking to homepage */}
                <Link to="/" className="header-title-link">
                    Breaking Internet News
                </Link>
            </div>

            {/* Centered search bar */}
            <div className="search-box">
                <input 
                    type="text"
                    placeholder="Search..."
                />
            </div>

            {/* Write button */}
            <div className="header-button-wrapper">
                <Link to="/posts/write"> 
                    <button className="header-button">Write</button>
                </Link>
            </div>
        </header>
    );

};

export default Header;