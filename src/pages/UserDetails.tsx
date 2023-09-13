import styles from "./UserDetails.module.scss";

const { backButton } = styles;

const UserDetails = () => {
    return <section>
        <div className={backButton}> <button>
            <img
                src={`/images/icon/arrow-back-icon.svg`}
                alt="place holder image"
            /></button>
            <p>Back to Users</p>
        </div></section>
}

export default UserDetails;