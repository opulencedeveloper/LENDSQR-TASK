import { useState } from "react";
import Input from "../components/ui/Input";
import TextButton from "../components/ui/TextButton";
import styles from "./Auth.module.scss";
import TextInputButton from "../components/ui/TextInputButton";

const { section, section1, section2, formStyle, passwordInputStyle, showpassTextStyle, loginTextStyle, fPasswordButtonDiv, fPasswordTextStyle, passwordInputDiv, emailInputStyle } = styles;


const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPasswordHandler = () => {
        setShowPassword(prev => !prev);
    }

    const forgotPasswordHandler = () => { }

    const loginHandler = () => { }

    return (
        <div className={section}>
            <section className={section1}><img
                src="/images/logo/lendsqr-logo.svg"
                alt="LendsSQR Company Logo"
            />
                <img
                    src="/images/image/welcome-image.svg"
                    alt="LendsSQR Company Logo"
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
                    <TextButton buttonType="button" onClick={loginHandler} className={loginTextStyle}>Log in</TextButton>
                </form>
            </section>
        </div>
    );
}

export default Auth;



