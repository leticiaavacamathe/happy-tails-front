import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text?: string;
  actionOnClick?: () => void;
  children?: React.ReactElement;
  accesibility?: string;
}

const Button = ({
  text,
  className,
  actionOnClick,
  children,
  accesibility,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className={className}
      aria-label={accesibility}
      onClick={actionOnClick}
    >
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
