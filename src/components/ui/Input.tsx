import { InputProp } from "../../../shared/types";


const Input: React.FC<InputProp> = ({ className, placeholder, type, onClick }) => {
    // const MyComponent: React.FC<MyComponentProps> = ({ className, onClick }) => {
    return <input id={type} placeholder={placeholder} type={type} className={className} />
} 

export default Input;