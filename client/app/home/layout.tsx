import React from "react";

const HomeLayout = ({ children }: {
    children: React.ReactNode
}): React.ReactElement => {
  return (
    <>{children}</>
  );
};

export default HomeLayout;