import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { decrement, increment } from "../counter/counterSLice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="m-5">
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span className="mx-5">{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default Counter;
