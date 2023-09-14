import { useNavigate, useParams } from "react-router-dom";

import TextButton from "../components/ui/TextButton";
import styles from "./UserDetails.module.scss";
import { UserInformationType, DetailsDataType } from "../../shared/types";
import UserData from "../components/userdetails/UserData";

const { activeNavStyle, nonActiveNavStyle, nav, divContainer, firstDiv,
    secDiv, thirdDiv, lastDiv } = styles;

const navSection: string[] = [
    "General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"
];

const storedUserData = localStorage.getItem("userData");

const UserDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { email } = params;

    if (!storedUserData) {
        return null;;
    }

    const userDataObject: DetailsDataType[] = JSON.parse(storedUserData);
    const foundObject = userDataObject.find(userData => userData.email === email);

    if (!foundObject || foundObject === undefined) {
        return null;
    }

    const personalInformation: UserInformationType[] = foundObject.personalinfo;
    const educationEmploymentInfo: UserInformationType[] = foundObject.educationEmploymentInfo;
    const socialsInfo: UserInformationType[] = foundObject.socialsInfo;
    const guarantor: UserInformationType[] = foundObject.guarantor;

    const prevPageHandler = () => {
        navigate('/dashboard', { replace: true });
    }

    return <section className={divContainer}>
        <div className={firstDiv}> <button onClick={prevPageHandler}>
            <img
                src={`/images/icon/arrow-back-icon.svg`}
                alt="arrow back icon"
            /></button>
            <p>Back to Users</p>
        </div>
        <div className={secDiv}>
            <p>User Details</p>
            <div>
                <TextButton buttonType="button">Blacklist User</TextButton>
                <TextButton buttonType="button">Activate User</TextButton>
            </div>
        </div>
        <div className={thirdDiv}>
            <div>
                <div>
                    <div><img
                        src="/images/icon/dashboard-profile-icon.svg"
                        alt="Dashboard profile icon"
                    /></div>
                    <div><p>{foundObject?.personalinfo[0].content}</p><p>LSQFf587g90</p></div>
                </div>
                <div>
                    <p>User's Tier</p>
                    <div>{Array.from({ length: 3 }, (_, index) => (<img key={index}
                        src="/images/icon/filled-star-icon.svg"
                        alt="star rating icon"
                    />))}</div>
                </div>
                <div>
                    <p>₦200,000.00</p>
                    <p>9912345678/Providus Bank</p>
                </div>
            </div>
            <div className={nav}>
                {navSection.map((navTitle, index) =>
                    <span
                        className={navTitle === "General Details" ? activeNavStyle : nonActiveNavStyle}
                        key={index}><TextButton buttonType="button">{navTitle}</TextButton></span>)}
            </div>
        </div>

        <div className={lastDiv}>
            <UserData content={personalInformation} header="Personal Information" />
            <UserData content={educationEmploymentInfo} header="Education and Employment" />
            <UserData content={socialsInfo} header="Socials" />
            <UserData content={guarantor} header="Guarantor" />
        </div>

    </section>
}

export default UserDetails;