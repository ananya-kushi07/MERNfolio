import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ContactUs from "./components/Contact/ContactUs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Contact/contactUs.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Example of making a GET request using Axios in useEffect
  useEffect(() => {
    axios.get("/api/data") // Change "/api/data" to your actual GET endpoint
      .then(response => {
        console.log("GET request successful:", response.data);
        // Do something with the response data if needed
      })
      .catch(error => {
        console.error("Error making GET request:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Example of making a POST request using Axios
  const handleSubmitForm = () => {
    const formData = { /* Populate your form data here */ };
    axios.post("/api/submit-form", formData) // Change "/api/submit-form" to your actual POST endpoint
      .then(response => {
        console.log("POST request successful:", response.data);
        // Do something after the form is successfully submitted
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactUs onSubmit={handleSubmitForm} />} /> 
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
