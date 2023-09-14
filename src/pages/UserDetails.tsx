import { useNavigate } from "react-router-dom";

import TextButton from "../components/ui/TextButton";
import styles from "./UserDetails.module.scss";
import { UserInformationType } from "../../shared/types";
import UserData from "../components/userdetails/UserData";

const { activeNavStyle, nonActiveNavStyle, nav, divContainer, firstDiv,
    secDiv, thirdDiv, lastDiv } = styles;

const navSection: string[] = [
    "General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"
];

const personalInformation: UserInformationType[] = [
    { title: "Full name", content: "Grace Effiom" },
    { title: "Phone Number", content: "07060780922" },
    { title: "Email Address", content: "grace@gmail.com" },
    { title: "Bvn", content: "07060780922" },
    { title: "Gender", content: "Female" },
    { title: "Marital status", content: "Single" },
    { title: "Children", content: "None" },
    { title: "Type of residence", content: "Parent’s Apartment" },

];

const educationEmploymentInfo: UserInformationType[] = [
    { title: "Level of education", content: "B.Sc" },
    { title: "Employment status", content: "Employed" },
    { title: "Sector of employment", content: "FinTech" },
    { title: "Duration of employment", content: "2 years" },
    { title: "Office email", content: "grace@lendsqr.com" },
    { title: "Monthly income", content: "₦200,000.00- ₦400,000.00" },
    { title: "Loan repayment", content: "40,000" },
];

const socialsInfo: UserInformationType[] = [
    { title: "Twitter", content: "@grace_effiom" },
    { title: "Facebook", content: "Grace Effiom" },
    { title: "Instagram", content: "@grace_effiom" },
];

const guarantor: UserInformationType[] = [
    { title: "Full Name", content: "Debby Ogana" },
    { title: "Phone Number", content: "07060780922" },
    { title: "Email Address", content: "debby@gmail.com" },
    { title: "Relationship", content: "Sister" },
];



const UserDetails = () => {
    const navigate = useNavigate();

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
                    <div><p>Grace Effiom</p><p>LSQFf587g90</p></div>
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