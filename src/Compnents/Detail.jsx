import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function Detail() {
  var { id } = useParams();
  const query = useQuery("users1", getUsers);
  // console.log(id);

  async function getUsers() {
    const res = await fetch(`http://localhost:3004/users/${id}`);
    return res.json();
  }

  return (
    <>
      <div className="container">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        City
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {query.data?.id}
                      </td>
                      <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {query.data?.name}
                      </td>
                      <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {query.data?.city}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
