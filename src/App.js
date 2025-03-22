import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ScrollToTop from "./components/ScrollToTop";
import "./style.scss";
import "./App.scss";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <Router>
      <Preloader load={load} />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <div className="mainContainerWrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
