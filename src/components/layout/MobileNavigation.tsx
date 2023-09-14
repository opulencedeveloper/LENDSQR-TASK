import MyNavigator from "./MyNavigator";
import styles from "./Navigation.module.scss";

const { mobileNavigation } = styles;


const MobileNavigation = () => {
    return <nav className={mobileNavigation}>
        <MyNavigator />
    </nav>
}

export default MobileNavigation;