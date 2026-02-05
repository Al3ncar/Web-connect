import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Header from "../layouts/Header/header";
import Footer from "../layouts/Footer/footer";

import { Donation } from "../pages/donation";
import { Volunteer } from "../pages/volunteer";
import { Mentorship } from "../pages/mentorship";
import { Events } from "../pages/events";
import HomePage from "../pages/home";
import About from "../pages/about";

import Login from "../pages/login";

export default function AppRoutes() {
  const [username, setUsername] = useState("");
  const [dataApi, setDataApi] = useState([]);
  const [isValid, setValid] = useState(true);

  const handleLogin = async () => {
    if (!username.trim()) return;

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      console.log(response.data);
      setDataApi(response.data);
      setValid(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      {isValid ? (
        <Routes>
          <Route
            path="/"
            element={
              <Login
                username={username}
                getValue={() => handleLogin()}
                setUsername={(state) => setUsername(state)}
              />
            }
          />
        </Routes>
      ) : (
        <>
          <Header imgProfile={dataApi.avatar_url} userName={dataApi.name} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/events" element={<Events />} />
              <Route
                path="/about"
                element={
                  <About
                    imgProfile={dataApi.avatar_url}
                    userName={dataApi.name}
                    bio={dataApi.bio}
                    location={dataApi.location}
                    login={dataApi.login}
                  />
                }
              />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
