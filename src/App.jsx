import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

// Komponen undangan
// import Home from './pages/Home';
import Invitation from "./pages/Invitation";
import ManageInvitations from "./pages/ManageInvitations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManageInvitations />} />
        <Route path="/:guestName" element={<Invitation />} />
      </Routes>
    </Router>
  );
}

export default App;
