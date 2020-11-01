import React from "react";
import "./header.css";

const Header = ()=>{
    return(
        <header>
            <div className="head_container">
                <div className="textstyle">Camera Management</div>
                <div className="profile">
                    <img className="pic" src={"images/default-profile-picture.jpg"}/><br/>
                    <span style={{fontSize:"13px"}}>John Smith</span>
                </div>
            </div>
            <hr/>
        </header>
    )
}

export default Header;