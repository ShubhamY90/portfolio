import React from "react";

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles =
      "bg-blue-300 text-black hover:bg-blue-400 focus:ring-blue-300 px-6 py-2";
  } else if (variant === "outline") {
    variantStyles =
      "border border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-black px-6 py-2";
  } else if (variant === "ghost") {
    variantStyles =
      "text-blue-300 hover:text-white hover:underline px-3 py-2";
  }

  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};
