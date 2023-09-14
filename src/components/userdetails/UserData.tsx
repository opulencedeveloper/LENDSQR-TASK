import { UserDataType } from "../../../shared/types";

const UserData: React.FC<UserDataType> = ({ header, content }) => {
    return <div>
        <p>{header}</p>
        <div > {content.map((personalData, index) => <div key={index}>
            <p>{personalData.title}</p>
            <p>{personalData.content}</p>
        </div>)}</div>

    </div>
}

export default UserData;