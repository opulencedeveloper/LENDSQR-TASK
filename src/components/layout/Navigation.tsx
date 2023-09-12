import { NavLink, useLocation } from "react-router-dom";

import styles from "./Navigation.module.scss";

import { NavLinkType } from "../../../shared/types";


const { navigation, activeNavLinkStyle } = styles;

const navLinks: NavLinkType[] = [
    { link: "/", title: "Home" },
    { link: "/a", title: "Home" },
    { link: "/a", title: "Home" },
    { link: "/a", title: "Home" },
];


const Navigation = () => {
    const location = useLocation();
  const activeLink = location.pathname;
    return <nav className={navigation}>
        <div>
            <img
                src="/images/icon/briefcase-icon.svg"
                alt="place holder image"
            />
            <select>
                <option>Switch Organization</option>
                <option>Switch Organization</option>
            </select> </div>
        <div>
            <img
                src="/images/icon/home-icon.svg"
                alt="place holder image"
            />
            <p>Dashboard</p> </div> 
        <p>Customers</p> 
        {navLinks.map((navData, index) => <NavLink
            to="/"
            className={activeLink === navData.link ? activeNavLinkStyle : ""}
        key={index}
            ><img
            src="/images/icon/home-icon.svg"
            alt="place holder image"
        />
            <p>Users</p> </NavLink>)}
    </nav>
}

export default Navigation;