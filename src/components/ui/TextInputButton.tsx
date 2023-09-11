import TextButton from "./TextButton";
import { TextInputButtonProp } from "../../../shared/types";
import Input from "./Input";

const TextInputButton: React.FC<TextInputButtonProp> = ({ parentStyle, placeholder, type, inputStyle, onClick, butonStyle, children, buttonType }) => {
    return <div className={parentStyle}><Input placeholder={placeholder} type={type} className={inputStyle} />
        <TextButton buttonType={buttonType} onClick={onClick} className={butonStyle}>{children}</TextButton>
    </div>
}

export default TextInputButton;