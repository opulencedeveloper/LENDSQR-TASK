import { useState } from "react";

import { useNavigate } from "react-router-dom";

import useHttp from "../components/hooks/useHttp";

import Input from "../components/ui/Input";
import TextButton from "../components/ui/TextButton";
import styles from "./Auth.module.scss";
import TextInputButton from "../components/ui/InputButton";
import { HttpResponseData } from "../../shared/types";

const { section, section1, section2, formStyle, passwordInputStyle, showpassTextStyle, loginTextStyle, fPasswordButtonDiv, passwordInputDiv, emailInputStyle } = styles;


const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { isLoading, error, sendRequest: fetchDataHandler } = useHttp();
    const navigate = useNavigate();

    const toggleShowPasswordHandler = () => {
        setShowPassword(prev => !prev);
    }

    const forgotPasswordHandler = () => { }
    const myResponse = (res: HttpResponseData) => {
        const { tableData } = res;
        const tableDataString = JSON.stringify(tableData);
        localStorage.setItem("userData", tableDataString);
        navigate('/dashboard', { replace: true });
    };

    const loginHandler = () => {
        fetchDataHandler(myResponse);
    }

    return (
        <div className={section}>
            <section className={section1}><img
                src="/images/logo/lendsqr-logo.svg"
                alt="LendsSQR Company Logo"
            />
                <img
                    src="/images/image/welcome-image.svg"
                    alt="LendsSQR welcome image"
                />
            </section>
            <section className={section2}>
                <form className={formStyle}>
                    <p>Welcome!</p>
                    <p>Enter details to login.</p>
                    <Input placeholder="Email" type="email" className={emailInputStyle} />
                    <TextInputButton placeholder="Password"
                        buttonType="button"
                        type={showPassword ? "password" : "text"}
                        onClick={toggleShowPasswordHandler}
                        parentStyle={passwordInputDiv}
                        butonStyle={showpassTextStyle}
                        inputStyle={passwordInputStyle}>{showPassword ? "Show" : "Hide"}
                    </TextInputButton>
                    <div className={fPasswordButtonDiv}>
                        <TextButton buttonType="button"
                            onClick={forgotPasswordHandler}
                        >Forgot PASSWORD?
                        </TextButton>
                    </div>
                    <TextButton disable={isLoading} buttonType="button" onClick={loginHandler} className={loginTextStyle}>
                        {isLoading ? "Please Wait" : "Log in"}
                    </TextButton>
                </form>
            </section>
        </div>
    );
}

export default Auth;



