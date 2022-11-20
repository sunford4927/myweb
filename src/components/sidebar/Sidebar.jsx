import React from "react";
import "./Sidebar.css";
import Dropdown from './dropdown/Dropdown';

function sidebar(){

    return (
    <div className="sidebar">
        <div className="sidebarWrapaper">
            <div className="sidebarMenu">
                <h3 className="sidebartitle">Dashborad</h3>
                <ul className="sidebarlist">
                    <Dropdown>
                    <li className="sidebarlistitem">meun</li>
                    <li className="sidebarlistitem">movie</li>
                    <li className="sidebarlistitem">home</li>
                    </Dropdown>
                </ul>
            </div>
        </div>
    </div>)
}

export default sidebar