import { FC } from "react";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({ onClick, label, variant = ButtonVariant.PRIMARY }) => {
    const variantClass = variant === ButtonVariant.PRIMARY ? "bg-primary hover:bg-primary-dark" : "bg-secondary hover:bg-secondary-dark";
    return (
    <button
      className={`${variantClass} mx-auto mt-big-s p-little-s rounded-md transition duration-300 ease`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
