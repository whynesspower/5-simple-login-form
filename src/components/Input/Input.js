import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const InputRef = useRef();
  const activate = () => {
    InputRef.current.focus();
  };

  // useImperativeHandle hook asks for ref and function
  // the function usually returns an object
  // it lets you use Refs in a function as well
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.label}>{props.label}</label>
      <input
        ref={InputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
// functional compoenents can't be given refs
// hence we need to use React.ForwardRef here
