export interface ButtonProps {
  onClick?: () => void;
  type: "reset" | "button" | "submit";
  text: string;
  decoration: "teal" | "outline" | "primary";
  rounded: boolean;
  primaryDark: boolean;
  hoverShowIcon: boolean;
}

export interface ProductDataItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  domain: string;
  description: string;
  buttonText: string;
  promotion: boolean;
}
