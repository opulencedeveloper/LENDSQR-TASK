import { useState } from "react";

import InputButton from "../ui/InputButton";
import styles from "./Header.module.scss";
import Portal from "../ui/Portal";
import MobileNavigation from "./MobileNavigation";

const { headerStyle, searchButtonStyle, inputContainer,
    inputStyle, searchIcon, hamburger, hamburgerBottom, hamburgerMiddle,
    hamburgerTop, open, toggleNav, openNav } = styles;

let navAnimationClass = "";
let showNavClass = "";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        if (isOpen) {
            navAnimationClass = "";
            showNavClass = "";
            
            setIsOpen(prevExpenses => !prevExpenses);
            
        } else {
            navAnimationClass = open;
            showNavClass = openNav;
            setIsOpen(prevExpenses => !prevExpenses);
            
        }
    };

    const searchButtonHandler = () => { }

    return <>
        <Portal>
            <div onClick={toggleDrawer}
                className={`${toggleNav} ${showNavClass}`}>
                <MobileNavigation />
            </div>
        </Portal>
        <header className={headerStyle}>
            <img
                src="/images/logo/lendsqr-logo.svg"
                alt="LendsSQR Company Logo"
            />
            <InputButton
                inputStyle={inputStyle}
                type="text"
                placeholder="Search for anything"
                parentStyle={inputContainer}
                buttonType="button"
                onClick={searchButtonHandler}
                butonStyle={searchButtonStyle}>
                <img
                    className={searchIcon}
                    src="/images/icon/search-icon.svg"
                    alt="search icon"
                />
            </InputButton>
            <div >
                <a href="#">Docs</a>
                <img
                    src="/images/icon/bell-icon.svg"
                    alt="bell icon"
                />
                <div>
                    <img
                        src="/images/image/place-holder-image.svg"
                        alt="place holder image"
                    />
                </div>
                <select>
                    <option>Victor</option>
                    <option>Amobi</option>
                </select>
            </div>

            <button
                className={`${navAnimationClass} ${hamburger}`}
                type="button"
                onClick={toggleDrawer}
            >
                <span className={hamburgerTop}></span>
                <span className={hamburgerMiddle}></span>
                <span className={hamburgerBottom}></span>
            </button>
        </header> </>
}

export default Header;





