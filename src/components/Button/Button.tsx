import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  children?: React.ReactElement;
  accesibility?: string;
}

const Button = ({
  text,
  className,
  onClick: onClick,
  children,
  accesibility,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className={className}
      aria-label={accesibility}
      onClick={onClick}
    >
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
