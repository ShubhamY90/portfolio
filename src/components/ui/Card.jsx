import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-xl border border-blue-300/30 bg-gray-900 shadow-md hover:shadow-blue-300/20 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
