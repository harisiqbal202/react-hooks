import React from "react";
import { useReducer } from "react";
import { reducer, initState } from "./ReducerFun";

function ReducerEx() {
  const [state, dispatch] = useReducer(reducer, initState);

  function onSubmit(e) {
    e.preventDefault();
    const { email, pass } = e.target.elements;
    console.log(email.value);
    console.log(pass.value);
    dispatch({
      ...state,
      email: email.value,
      pass: pass.value,
    });
    console.log(state);
  }

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto my-5">
        <form onSubmit={onSubmit}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="pass"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ReducerEx;
