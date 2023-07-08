import React from "react";

const Card = ({ children }) => {
  return (
    <div className="m-auto max-w-[1300px] flex justify-between items-center w-full px-5 py-10">
      {children}
    </div>
  );
};

export default Card;
