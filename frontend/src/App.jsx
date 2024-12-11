import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import Portfolio from "./components/Portfolio/Portfolio";
import { useEffect, useState } from "react";
import ButtonElem from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchUserData() {
      try {
        const response = await fetch("http://localhost:3000/api/users/verify", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }

        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="App">
      <Navbar user={user} />

      {user && <ButtonElem onClick={handleLogout}>Logout</ButtonElem>}

      <Home />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
