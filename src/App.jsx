import Users from "./Compnents/Users";
import { QueryClient, QueryClientProvider } from "react-query";
import Detail from "./Compnents/Detail";

import { Routes, Route } from "react-router-dom";
import AddNew from "./Compnents/AddNew";
import EditUser from "./Compnents/EditUser";

import ReducerEx from "./Compnents/ReducerEx";
import Counter from "./Compnents/counter";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="" element={<Users />} />
          <Route path="/addnew" element={<AddNew />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/reducer" element={<ReducerEx />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<Detail />} />

          {/* <Route path="/gmail" element={<Gmail />}>
            <Route path="" element={<Inbox />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="outbox" element={<Outbox />} />
          </Route> */}
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
