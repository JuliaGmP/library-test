import React from "react";
import "./SideNav.scss";
import { Link } from "react-router-dom";

const SideNavComponent = (props) => {
    return (
        <div className="sidenav-component">
            {menuItems.map((item, i) => {
                return <NavItem key={i} {...item} {...props}/>
            })}

        </div>
    );
};

const menuItems = [
    {
        name: "Authors",
        route: "/authors"
    },
    {
        name: "Books",
        route: "/books"
    },
    {
        name: "Categories",
        route: "/categories"
    }
];

const NavItem = (props) => {
    const { name, route, pathname } = props;
    const currentPath = pathname && "/" + pathname.split("/")[1];
    return (
        <Link to={route} className={`nav-item ${currentPath === route ? "active" : null}`}>
            {name}
        </Link>
    );
};

export default SideNavComponent;
