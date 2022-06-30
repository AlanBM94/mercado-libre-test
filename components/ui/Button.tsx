import React, { FC } from "react";
import { ButtonProps } from "../../interfaces";

export const Button: FC<ButtonProps> = ({ text, customStyles }) => {
  return (
    <button className="button" style={customStyles}>
      {text}
    </button>
  );
};
