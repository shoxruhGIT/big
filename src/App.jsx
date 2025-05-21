import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import AppLayout from "./layouts/AppLayout";

import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import BillingPage from "./pages/BillingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/billing" element={<BillingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
