import React, { FC } from "react";
import { NoContentProps } from "../../interfaces";

export const NoContent: FC<NoContentProps> = ({ text }) => {
  return (
    <div className="noContent">
      <h3>{text}</h3>
    </div>
  );
};
