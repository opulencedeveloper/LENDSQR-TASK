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
                alt="place holder image"
            />
            <p>View Details</p>
        </button>
        <button onClick={detailsPageHandler}>
            <img
                src={`/images/icon/black-list-icon.svg`}
                alt="place holder image"
            />
            <p>Blacklist User</p>
        </button>
        <button onClick={detailsPageHandler}>
            <img
                src={`/images/icon/active-user-icon.svg`}
                alt="place holder image"
            />
            <p>Activate User</p>
        </button>
    </>
}

export default MoreVertDropDown;