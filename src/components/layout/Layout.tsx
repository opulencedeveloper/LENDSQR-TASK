import { ChildrenProps } from "../../../shared/types";
import Header from "./Header";

const Layout: React.FC<{ children: ChildrenProps }> = ({ children }) => {
    return (
        <div className=''>
            <Header />
            <main className='w-full'>{children}</main>
        </div>
    );
};

export default Layout;