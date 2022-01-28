import React from "react";
import "./Layout.scss";
import SideNav from "./SideNav/SideNav";

const Layout = (props) => {
    const { children } = props;
    return (
        <div className="layout-component">
            <header>
            </header>
            <div className="sidenav">
                <SideNav {...props.location}/>
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;