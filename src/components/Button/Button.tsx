import React from "react";

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
    <button
      className={className}
      aria-label={accesibility}
      onClick={actionOnClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
