type ButtonType = "button" | "submit" | "reset";
interface GenericObject {
  [key: string]: any;
}

export type ChildrenProps = React.ReactNode;

export type PortalPropType = {
  children: ChildrenProps;
};

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
  onClick?: () => void;
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

export interface NavLinkType {
  link: string;
  title: string;
  icon: string;
}

export interface CardContentType {
  icon: string;
  title: string;
  subtitle: string;
}

export interface TableDataType {
  org: string;
  username: string;
  email: string;
  phoneNo: string;
  phoneNo: string;
  date: string;
  status: string;
}

export interface OverLayInputType {
  title: string;
  type: string;
}
export interface UserInformationType {
  title: string;
  content: string;
}

export interface UserDataType {
  header: string;
  content: GenericObject[];
}
