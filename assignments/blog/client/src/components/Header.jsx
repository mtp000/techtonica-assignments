import React from "react";
import { Link, Route } from "react-router-dom";


function Header() {

    return (
        <>
            {/* Website title linking to homepage */}
            <Link to="/" className="header-title">
                <span>MyBlog</span>
            </Link>

            <div className="search-box">
                <input 
                type="text"
                placeholder="Search..."
                />
            </div>
            

            <Link to="/write"> 
                <button className="header-button">Write</button>
            </Link>
            
        </>
    )
};

export default Header;