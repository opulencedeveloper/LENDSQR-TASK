import { useNavigate } from "react-router-dom";

const MoreVertDropDown = () => {
    const navigate = useNavigate();

    const detailsPageHandler = () => {
        navigate('details', { replace: true });
    }
    
    return <>
        <button onClick={detailsPageHandler}>
            <img
                src={`/images/icon/eye-icon.svg`}
                alt="eye icon"
            />
            <p>View Details</p>
        </button>
        <button onClick={detailsPageHandler}>
            <img
                src={`/images/icon/black-list-icon.svg`}
                alt="black list icon"
            />
            <p>Blacklist User</p>
        </button>
        <button onClick={detailsPageHandler}>
            <img
                src={`/images/icon/active-user-icon.svg`}
                alt="active user icon"
            />
            <p>Activate User</p>
        </button>
    </>
}

export default MoreVertDropDown;