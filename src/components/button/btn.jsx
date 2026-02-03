import React from "react";
import S from "../../styles/components/ui/button.module.scss";
import { FaArrowRight } from "react-icons/fa";

export const Button = ({ type = "default", label }) => {
  const classMap = {
    default: S.btn_default,
    outline: S.btn_outline,
    "square-primary": S.btn_square,
    "square-secondary": S.btn_square_secondary,
  };

  return (
    <button className={classMap[type]}>
      <p>{label}</p>
      {("square-primary" === type || "square-secondary" === type) && (
        <FaArrowRight />
      )}
    </button>
  );
};
