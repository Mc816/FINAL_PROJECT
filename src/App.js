// imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";

// pages
import CharacterPage from "./pages/CharacterPage/CharacterPage.js";
import AuthPage from "./pages/Auth/AuthPage.js";
import DisenySearchPage from "./pages/DisenySearchPage/DisenySearchPage";
// components
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());
  // console.log('current user', user)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/makeachar" element={<DisenySearchPage />} />
            <Route path="/character" element={<CharacterPage />} />
            <Route path="/*" element={<Navigate to="/makeachar" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
