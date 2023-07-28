import React from "react";
import SmallStdBtn from "./SmallStdBtn";
export default function SmallSecondaryBtn({ text, onClick, onSubmit, type }) {
  const classNames =
    "bg-skin-button-secondary text-skin-inverted" +
    " hover:scale-110 hover:bg-skin-button-secondary-hover" +
    " duration-300 hover:text-white";
  return (
    <>
      <SmallStdBtn
        text={text}
        onClick={onClick}
        onSubmit={onSubmit}
        classNames={classNames}
        type={type}
      />
    </>
  );
}
