import { ReactElement } from "react";

export interface ButtonProps {
  onClick?: () => void;
  type: "reset" | "button" | "submit";
  text: string;
  decoration: "teal" | "outline" | "primary";
  rounded: boolean;
  primaryDark: boolean;
  hoverShowIcon: boolean;
}

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: "tel" | "password" | "text" | "email" | "number";
  label?: string | ReactElement;
  search?: boolean;
  rounded?: boolean;
}

export interface TestimonialDataItemProps {
  id: number;
  title: string;
  rating: number;
  description: string;
  author: string;
}

export interface BrandingDataItemProps {
  id: number;
  avatar: string;
  title: string;
  description: string;
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
