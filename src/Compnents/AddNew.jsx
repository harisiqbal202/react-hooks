import React, { useState } from "react";
import { useMutation } from "react-query";

function AddNew() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    city: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function dataSubmit(e) {
    e.preventDefault();
    mutation.mutate(mutation);
  }
  const mutation = useMutation(async (newTodo) => {
    const resposne = await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const res = await resposne.json();
    console.log(res);
  });

  return (
    <>
      <div className="container px-5 py-4 flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full relative mx-auto">
          <h2 className="text-lg font-bold text-gray-900">Add User</h2>
          <form onSubmit={dataSubmit}>
            <div className="relative">
              <label className="text-lg font-semibold text-gray-900">ID</label>
              <input
                type="number"
                value={user.id}
                name="id"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 my-2"
              />
            </div>
            <div className="relative">
              <label className="text-lg font-semibold text-gray-900">
                Name
              </label>
              <input
                type="text"
                value={user.name}
                name="name"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 my-2"
              />
            </div>
            <div className="relative mb-2">
              <label className="text-lg font-semibold text-gray-900">
                City
              </label>
              <input
                type="text"
                value={user.city}
                name="city"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300  text-base  text-gray-700 py-1 px-3 my-2"
              />
            </div>

            <button
              type="submit"
              className="text-white w-full bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNew;
