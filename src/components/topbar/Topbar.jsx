import React from "react";
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';


function topbar(){
    return(
        <div className="topbar">
            <div className="topbarwrapaper">
                <div className="topleft">
                <span className="logo">CityAdmin</span>
                </div>
                <div className="topright">
                    <div className="topbariconcontainer">
                    <NotificationsNoneIcon/>
                    <span className="topiconbadge">2</span>
                    </div>
                    <div className="topbariconcontainer">
                    <LanguageIcon/>
                    <span className="topiconbadge">2</span>
                    </div>
                    <div className="topbariconcontainer">
                    <SettingsIcon/>
                    <span className="topiconbadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default topbar