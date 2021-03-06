import React from "react";

const Input = ({ forwardedRef, ...props }) => {
  return <input ref={forwardedRef} {...props} />;
};
const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
