import React from "react";

function Input({ label, name, error, onChanged, ...rest }) {
  return (
    <>
      <input
        {...rest}
        name={name}
        onChange={onChanged}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
        error={error}
      />
    </>
  );
}

export default Input;
