// imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
// pages
import CharacterPage from "./pages/CharacterPage/CharacterPage.js";
import AuthPage from "./pages/Auth/AuthPage.js";
import OrderHistoryPage from "./pages/OrderHistory/OrderHistoryPage";
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
            <Route path="/orders/new" element={<OrderHistoryPage />} />
            <Route path="/character" element={<CharacterPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
