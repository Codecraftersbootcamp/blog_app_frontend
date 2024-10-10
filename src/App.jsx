import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import SignUp from "./pages/SignUp";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} user={user} />} />
      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/sign-up"
        element={<SignUp setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      />
    </Routes>
  );
}
