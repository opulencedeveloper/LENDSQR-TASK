import { useState } from "react";


import { CardContentType, TableDataType, OverLayInputType } from "../../shared/types";
import Input from "../components/ui/Input";
import TextButton from "../components/ui/TextButton";

import styles from "./Dashboard.module.scss";
import MoreVertDropDown from "../components/dashboard/MoreVertDropDown";

const { section1, card, cardContainer, tableContainer, headerStyle,
    tableDataStyle, usersText, pagerStyle, tableDataEndStyle, inActiveStyle,
    pendingStyle, blackListStyle, activeStyle, moreVertButton, overLay, moreVertOverlay
} = styles;

const cardContent: CardContentType[] = [
    {
        icon: "pink-users",
        title: "Users",
        subtitle: "2,453",
    },
    {
        icon: "group",
        title: "Active Users",
        subtitle: "2,453",
    },
    {
        icon: "loan",
        title: "Users with Loans",
        subtitle: "12,453",
    },
    {
        icon: "savings",
        title: "Users with Savings",
        subtitle: "102,453",
    },
]

const tableHeader: string[] = [
    "Organization", "Username", "Email", "Phone number", "Date joined", "Status",
];

const tableData: TableDataType[] = [
    {
        org: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        phoneNo: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Active"
    },
    {
        org: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        phoneNo: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Inactive"
    },
    {
        org: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        phoneNo: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Pending"
    },
    {
        org: "Lendsqr",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        phoneNo: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Blacklisted"
    },
];

const pageButtonText: string[] = [
    "1", "2", "3", "...", "15", "16",
];

const overLayInput: OverLayInputType[] = [
    { title: "Organization", type: "select" },
    { title: "Username", type: "text" },
    { title: "Email", type: "email" },
    { title: "Date", type: "date" },
    { title: "Phone Number", type: "number" },
    { title: "Status", type: "select" },
];

const Dashboard = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedMoreVert, setSelectedMoreVert] = useState("");

    const toggleOverlayHandler = () => {
        setShowOverlay(prev => !prev);
    }

    const selectedMoreVertHandler = (value: string) => {
        setSelectedMoreVert(value);
    }

    return <section className={section1}>
        <p className={usersText}>Users</p>
        <div className={cardContainer}>
            {cardContent.map((cardData, index) => <div className={card} key={index}>
                <div><img
                    src={`/images/icon/${cardData.icon}-icon.svg`}
                    alt="place holder image"
                /></div>
                <p>{cardData.title}</p>
                <p>{cardData.subtitle}</p>
            </div>)}
        </div>


        {/* TABLE */}
        <div className={tableContainer}>
            {showOverlay && <div className={overLay}>
                {overLayInput.map((inputData, index) => <><p>{inputData.title}</p>
                    {inputData.type === "select" ? <select>
                        <option>Option1</option>
                        <option>Option2</option>
                    </select> :
                        <Input placeholder="User" type={inputData.type} />}</>)}
                <div>
                    <TextButton buttonType="button">Reset</TextButton>
                    <TextButton buttonType="button">Filter</TextButton>
                </div>

            </div>}
            <table>
                <thead>
                    <tr>
                        {tableHeader.map((header, index) => <th key={index}>
                            <div className={headerStyle} > <p>{header}</p>
                                <button onClick={toggleOverlayHandler} type="button">
                                    <img
                                        src={`/images/icon/filter-results-icon.svg`}
                                        alt="place holder image" />
                                </button>
                            </div>
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, tableIndex) => {
                        const isEnd = tableIndex === tableData.length - 1;
                        const labelStyle = data.status === "Pending" ? pendingStyle : data.status === "Inactive" ? inActiveStyle : data.status === "Blacklisted" ? blackListStyle : activeStyle;

                        return <tr className={isEnd ? tableDataEndStyle : tableDataStyle}>
                            <td key={tableIndex}>{data.org}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneNo}</td>
                            <td>{data.date}</td>
                            <td ><p className={labelStyle}>{data.status}</p></td>
                            <td><button onClick={() => selectedMoreVertHandler(tableIndex.toString())} className={moreVertButton}><img
                                src={`/images/icon/more-vert-icon.svg`}
                                alt="place holder image"
                            />
                                {selectedMoreVert === tableIndex.toString() &&
                                    <div className={moreVertOverlay}>
                                        <MoreVertDropDown />
                                    </div>}
                            </button></td>
                        </tr>
                    })}
                </tbody>

            </table>

        </div>

        <div className={pagerStyle}> <div ><p>Showing</p> <select><option>100</option>
            <option>100</option>
            <option>100</option>
        </select>
            <p>out of {tableData.length}</p>
        </div>
            <div><button><img
                src={`/images/icon/angle-left-icon.svg`}
                alt="place holder image"
            /></button>
                {pageButtonText.map((i, index) => <p key={index}>{i}</p>)}

                <button>
                    <img
                        src={`/images/icon/angle-right-icon.svg`}
                        alt="place holder image"
                    /></button>
            </div>

        </div> </section>

}

export default Dashboard;