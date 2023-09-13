import MyNavigator from "./Navigator";
import styles from "./Navigation.module.scss";

const { navigation } = styles;


const Navigation = () => {
    return <nav className={navigation}>
       <MyNavigator />
    </nav>
}

export default Navigation;