import { useLocation, NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";
import { NavLinkType } from "../../../shared/types";

const { activeNavLinkStyle, nonActiveNavLinkStyle, navHeaderStyle, logout } = styles;

const customerNavLinks: NavLinkType[] = [
    { link: "/dashboard", title: "Users", icon: "users" },
    { link: "/guarantors", title: "Guarantors", icon: "guarantors" },
    { link: "/loans", title: "Loans", icon: "loans" },
    { link: "/hand-shake", title: "Decison Models", icon: "hand-shake" },
    { link: "/piggy-bank", title: "Savings", icon: "piggy-bank" },
    { link: "/loan-request", title: "Loan Request", icon: "loan-request" },
    { link: "/user-check", title: "Whitelist", icon: "user-check" },
    { link: "/user-times", title: "Karma", icon: "user-times" },
];

const businessNavLinks: NavLinkType[] = [
    { link: "/organization", title: "Organization", icon: "briefcase" },
    { link: "/loan-products", title: "Loan Products", icon: "loan-request" },
    { link: "/savings-products", title: "Savings Products", icon: "bank" },
    { link: "/fees-and-charges", title: "Fees and Charges", icon: "coins" },
    { link: "/transactions", title: "Transactions", icon: "transaction" },
    { link: "/services", title: "Services", icon: "services" },
    { link: "/service-account", title: "Service Account", icon: "service-account" },
    { link: "/settlements", title: "Settlements", icon: "settlements" },
    { link: "/reports", title: "Reports", icon: "chart-bar" },

];

const settingsNavLinks: NavLinkType[] = [
    { link: "/preferences", title: "Preferences", icon: "sliders" },
    { link: "/fees-and-pricing", title: "Fees and Pricing", icon: "badge-percent" },
    { link: "/audit-Logs", title: "Audit Logs", icon: "clipboard-list" },
    { link: "/systems-messages", title: "Systems Messages", icon: "tire" },

];

const MyNavigator = () => {
    const location = useLocation();
    const activeLink = location.pathname;
    return <>
        <div>
            <img
                src="/images/icon/briefcase-icon.svg"
                alt="Briefcase icon"
            />
            <select>
                <option>Switch Organization</option>
                <option>Switch Organization</option>
            </select>
        </div>
        <div>
            <img
                src="/images/icon/home-icon.svg"
                alt="Home icon"
            />
            <p >Dashboard</p>
        </div>
        <p className={navHeaderStyle}>Customers</p>
        {customerNavLinks.map((navData, index) => <NavLink
            to={navData.link}
            className={activeLink === navData.link ? activeNavLinkStyle : nonActiveNavLinkStyle}
            key={index}
        ><img
                src={`/images/icon/${navData.icon}-icon.svg`}
                alt={`${navData.icon} icon`}
            />
            <p>{navData.title}</p> </NavLink>)}
        <p className={navHeaderStyle}>Businesses</p>
        {businessNavLinks.map((navData, index) => <NavLink
            to={navData.link}
            className={activeLink === navData.link ? activeNavLinkStyle : nonActiveNavLinkStyle}
            key={index}
        ><img
                src={`/images/icon/${navData.icon}-icon.svg`}
                alt={`${navData.icon} icon`}
            />
            <p>{navData.title}</p> </NavLink>)}

        <p className={navHeaderStyle}>Settings</p>
        {settingsNavLinks.map((navData, index) => <NavLink
            to={navData.link}
            className={activeLink === navData.link ? activeNavLinkStyle : nonActiveNavLinkStyle}
            key={index}
        ><img
                src={`/images/icon/${navData.icon}-icon.svg`}
                alt={`${navData.icon} icon`}
            />
            <p>{navData.title}</p> </NavLink>)}
        <div className={logout}>
            <div>
                <img
                    src={`/images/icon/sign-out-icon.svg`}
                    alt="Sign out icon"
                />
                <p>Logout</p>
            </div>
            <p>v1.2.0</p>
        </div>
    </>
}

export default MyNavigator;