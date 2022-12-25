import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import CustomAlert from "./CustomAlert";

const getUsers = async () => {
  const resposne = await fetch("http://localhost:3004/users");
  const res = resposne.json();
  return res;
};

function Users() {
  const navigate = useNavigate();
  const query = useQuery("users", getUsers);
  console.log(query);

  const handleClick = () => {
    navigate("/addnew");
  };

  const updateRecord = (id) => {
    console.log("edit data: id : ", id);
    navigate(`/edituser/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <button
                  onClick={handleClick}
                  className="rounded bg-blue-600 text-white p-2 m-2"
                >
                  Add User
                </button>
                <button
                  onClick={() => {
                    navigate("reducer");
                  }}
                  className="rounded bg-blue-600 text-white p-2 m-2"
                >
                  Reducer Example Form
                </button>
                <button
                  onClick={() => {
                    navigate("counter");
                  }}
                  className="rounded bg-blue-600 text-white p-2 m-2"
                >
                  Counter
                </button>
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {query.data?.map((user) => (
                      <tr className="border-b" key={user.id}>
                        <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {user.id}
                        </td>
                        <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          {user.city}
                        </td>
                        <td className="flex text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => updateRecord(user.id)}
                            className="rounded bg-green-400 text-white p-2 mx-2"
                          >
                            Edit
                          </button>
                          <Link to={`/users/${user.id}`}>
                            <span className="rounded bg-green-600 text-white p-2 mx-2 mt-2">
                              Details
                            </span>
                          </Link>
                          <CustomAlert buttonLabel="Delete" id={user.id} />
                        </td>
                      </tr>
                    ))}
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

export default Users;
