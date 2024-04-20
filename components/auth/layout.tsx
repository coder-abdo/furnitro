import React from "react";

type Props = {
  children: React.ReactNode;
};
export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="container flex justify-center items-center md:py-8 py-4">
      {children}
    </div>
  );
};
