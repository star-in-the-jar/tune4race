import { FC } from "react";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: ButtonVariant;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, label, variant = ButtonVariant.PRIMARY, className }) => {
    const variantClass = variant === ButtonVariant.PRIMARY ? "bg-primary hover:bg-primary-dark" : "bg-secondary hover:bg-secondary-dark";
    return (
    <button
      className={`${variantClass} mx-auto p-little-s rounded-md transition duration-300 ease ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
