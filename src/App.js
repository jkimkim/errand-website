import React from "react";
import "./App.css";
import LoggedOut from "./screens/LoggedOut";
import LoggedIn from "./screens/Home";
import RequestForm from "./components/pages/RequestForm"; // Import RequestForm component
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Users from "./components/pages/Users";
import Documents from "./components/pages/Documents";
import { Container } from "react-bootstrap";
import LoggedInNav from "./components/LogedInNav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthContext"; // Import AuthProvider
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Wrap the entire app with AuthProvider */}
        <Routes>
          <Route exact path="/Home" element={<LoggedOut />} />
          {/* Use RequireAuth for protected route */}
          <Route
            path="/"
            element={
              <RequireAuth redirectTo="/Home">
                <LoggedIn />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth redirectTo="/Home">
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/contact"
            element={
              <RequireAuth redirectTo="/Home">
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            path="/users"
            element={
              <RequireAuth redirectTo="/Home">
                <Users />
              </RequireAuth>
            }
          />
          <Route
            path="/documents"
            element={
              <RequireAuth redirectTo="/Home">
                <Documents />
              </RequireAuth>
            }
          />
          <Route
            path="/request"
            element={
              <RequireAuth redirectTo="/Home">
                <RequestForm />
              </RequireAuth>
            }
          />
          {/* Add this route */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
