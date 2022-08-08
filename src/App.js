import React, { useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./contexts/github/GithubContext";
import { AlertProvider } from "./contexts/alert/AlertContext";
import User from "./pages/User";

function App() {
  return (
    <div className="custom-background">
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />

              <main className="container mx-auto px-8 pb-12 custom-background">
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </div>
  );
}

export default App;
