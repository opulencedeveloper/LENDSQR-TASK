import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

function App() {
  const location = useLocation();
  const path = location.pathname;

  if (path === "/") {
    return (
      <Routes>
        <Route index element={<Auth />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="dashboard">
          <Route index element={<Dashboard />} />
          <Route path="details" element={<UserDetails />} />
        </Route>
      </Routes>
    </Layout>

  );
}

{/* <Routes>
      <Route index element={<Auth />} />
    </Routes> */}


export default App;
