import TextButton from "./TextButton";
import { InputButtonProp } from "../../../shared/types";
import Input from "./Input";

const InputButton: React.FC<InputButtonProp> = ({ parentStyle, placeholder, type, inputStyle, onClick, butonStyle, children, buttonType }) => {
    return <div className={parentStyle}><Input placeholder={placeholder} type={type} className={inputStyle} />
        <TextButton buttonType={buttonType} onClick={onClick} className={butonStyle}>{children}</TextButton>
    </div>
}

export default InputButton;