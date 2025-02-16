import React from "react";
import { ContainerProps } from "./types";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1120px] px-4 lg:px-8 sm:px-6 relative">
      {children}
    </div>
  );
};
