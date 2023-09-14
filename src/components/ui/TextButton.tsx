import { TextButtonProp } from "../../../shared/types";


const TextButton: React.FC<TextButtonProp> = ({ className, children, onClick, buttonType, disable }) => {
    // const MyComponent: React.FC<MyComponentProps> = ({ className, onClick }) => {
    return <button disabled={disable}  type={buttonType} className={className} onClick={onClick}>{children}</button>
} 

export default TextButton;