export type ChildrenProps = React.ReactNode;
type ButtonType = "button" | "submit" | "reset";

export type InputProp = {
    className: string;
    placeholder: string;
    type: string;
    //onClick: () => void; /hvhhvjh
  };

  export type TextButtonProp = {
    className?: string;
    children: ChildrenProps;
    buttonType: ButtonType;
    onClick: () => void; 
  };

  export type TextInputButtonProp = {
    parentStyle: string;
    placeholder: string;
    type: string;
    inputStyle: string;
    butonStyle: string;
    children: ChildrenProps;
    buttonType: ButtonType;
    onClick: () => void; 
  };



