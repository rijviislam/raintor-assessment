"use client";

import useLenis from "@/app/hooks/useLenis";

const Context = ({ children }) => {
  useLenis();

  return <div className="content-wrapper">{children}</div>;
};
export default Context;
