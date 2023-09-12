import InputButton from "../ui/InputButton";
import styles from "./Header.module.scss";

const { headerStyle, searchButtonStyle, inputContainer, inputStyle, searchIcon } = styles;


const Header = () => {
    const searchButtonHandler = () => { }
    return <header className={headerStyle}>
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
            butonStyle={searchButtonStyle}><img
                className={searchIcon}
                src="/images/icon/search-icon.svg"
                alt="search icon"
            /></InputButton>
        <div >
            <a href="">Docs</a>
            <img
                src="/images/icon/bell-icon.svg"
                alt="bell icon"
            />
            <div><img
                src="/images/image/place-holder-image.svg"
                alt="place holder image"
            /></div>
            <select>
                <option>Victor</option>
                <option>Amobi</option>
            </select>
        </div>
    </header>
}

export default Header;