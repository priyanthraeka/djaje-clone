import React from "react";

const Card = ({ children }) => {
  return (
    <div className="m-auto max-w-[1300px] flex justify-between items-center w-full">
      {children}
    </div>
  );
};

export default Card;
