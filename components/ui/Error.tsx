import React, { FC } from "react";

import { ErrorProps } from "../../interfaces";

export const Error: FC<ErrorProps> = ({ text }) => {
  return (
    <div className="noContent">
      <h3>{text}</h3>
    </div>
  );
};
