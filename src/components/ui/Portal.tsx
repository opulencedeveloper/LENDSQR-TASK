import ReactDOM from "react-dom";

import { PortalPropType } from "../../../shared/types";

const Portal: React.FC<PortalPropType> = ({ children }) => {
    return ReactDOM.createPortal(
        <div>{children}</div>,
        document.getElementById("navigation") as Element
    );
};

export default Portal;

