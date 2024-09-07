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
  productImage: string;
  name: string;
  price: number;
  domain: string;
  description: string;
  buttonText: string;
  color: string;
}

export interface BrandingDataItemProps {
  id: number;
  avatar: string;
  title: string;
  description: string;
}
