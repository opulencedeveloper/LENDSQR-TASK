export type ChildrenProps = React.ReactNode;
type ButtonType = "button" | "submit" | "reset";

export type InputProp = {
    className?: string;
    placeholder: string;
    type: string;
    onClick?: () => void; 
  };

  export type TextButtonProp = {
    className?: string;
    children: ChildrenProps;
    buttonType: ButtonType;
    onClick: () => void; 
  };

  export type InputButtonProp = {
    parentStyle: string;
    placeholder: string;
    type: string;
    inputStyle: string;
    butonStyle: string;
    children: ChildrenProps;
    buttonType: ButtonType;
    onClick: () => void; 
  };

  interface NavLinkType {
    link: string;
    title: string;
    icon: string;
  }

  interface  CardContentType {
    icon: string;
    title: string;
    subtitle: string;
  }

  interface TableDataType {
    org: string;
    username: string;
    email: string;
    phoneNo: string;
    phoneNo: string;
    date: string;
    status: string;
  }

  interface OverLayInputType {
    title: string;
    type: string;
  }



