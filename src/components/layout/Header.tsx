import styles from "./Header.module.scss";

const {headerStyle, logoDimension} = styles;


const Header = () => {
    return <header className={headerStyle}>
        <img
                className={logoDimension}
                src="/images/logo/lendsqr-logo.svg"
                alt="LendsSQR Company Logo"
            />
    </header>
}

export default Header;