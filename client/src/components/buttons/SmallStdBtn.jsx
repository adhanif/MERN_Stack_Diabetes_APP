import React from "react";

export default function SmallStdBtn({
  text,
  classNames,
  onClick,
  onSubmit,
  type,
}) {
  return (
    <>
      <button
        className={`
text-md my-2 tracking-wide py-1 mx-auto
rounded-full px-5 ${classNames}`}
        onClick={onClick}
        onSubmit={onSubmit}
        type={type}
      >
        {text}
      </button>
    </>
  );
}
