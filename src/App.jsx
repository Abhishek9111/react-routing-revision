import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { Dashboard } from "./pages/dashboard";
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Landing = React.lazy(() => import("./pages/landing")); //lazy loading

// import { Landing } from "./pages/landing";

function App() {
  //
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"...loading"}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={"...loading"}>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "black", color: "white" }}>
      <button
        style={{ margin: "2px" }}
        onClick={() => {
          // window.location.href = "/";
          navigate("/"); // doesn't recalls the page and preserves expereince -> only works inside browser router wrapper
        }}
      >
        Landing
      </button>
      <button
        style={{ margin: "2px" }}
        onClick={() => {
          // window.location.href = "/dashboard";
          navigate("/dashboard"); // doesn't recalls the page and preserves expereince -> only works inside browser router wrapper
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
