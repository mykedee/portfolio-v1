import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Portfolio from "./screens/Portfolio";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [showDarkMode, setShowDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark');
    return savedMode ? JSON.parse(savedMode) : false;
  })

    useEffect(() => {
      localStorage.setItem("dark", JSON.stringify(showDarkMode));
    }, [showDarkMode]);

  const handleMode = () => {
      setShowDarkMode(prevMode => !prevMode);
  }
  
  return (
    <Router>        
      <Header handleMode={handleMode} setShowDarkMode={setShowDarkMode} showDarkMode={showDarkMode} />

      <main
        className={`min-h-[100vh] h-auto  ${
          showDarkMode ? "dark" : "bg-dash-bg"
        } `}
      >
      
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen/>
                
            }
            exact
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
