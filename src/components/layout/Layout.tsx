import { ChildrenProps } from "../../../shared/types";
import Header from "./Header";
import styles from "./Layout.module.scss";
import Navigation from "./Navigation";

const { outerLayout, innerLayout } = styles;

const Layout: React.FC<{ children: ChildrenProps }> = ({ children }) => {
    return (
        <div className={outerLayout}>
            <Header />
            <main className={innerLayout}>
                <Navigation />
                {children}
            </main>
        </div>
    );
};

export default Layout;