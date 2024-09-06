export interface ButtonProps {
  onClick?: () => void;
  type: "reset" | "button" | "submit";
  text: string;
  decoration: "teal" | "outline" | "primary";
  rounded: boolean;
  primaryDark: boolean;
  hoverShowIcon: boolean;
}
