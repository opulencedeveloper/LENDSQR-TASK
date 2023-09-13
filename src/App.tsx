import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
// import Users from "./pages/Users";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route index element={<Auth />} />  */}
        <Route path="dashboard">
        <Route index element={<Dashboard />}  />
        <Route path="details" element={<UserDetails />}  />
        </Route>
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </Layout>

  );
}

{/* <Routes>
      <Route index element={<Auth />} />
    </Routes> */}


export default App;
