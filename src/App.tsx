import Layout from "./components/layout/Layout";
//import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </Layout>

  );
}

{/* <Routes>
      <Route index element={<Auth />} />
    </Routes> */}


export default App;
