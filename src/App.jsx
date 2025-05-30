import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import AppLayout from "./layouts/AppLayout";

import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import BillingPage from "./pages/BillingPage";
import ServerConfigurator from "./server/ServerConfigurator";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* <Route element={<HomeLayout />}></Route> */}

        <Route path="/" element={<HomePage />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/server-configure" element={<ServerConfigurator />} />
          <Route path="/server/$id" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
