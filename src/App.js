import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Portfolio from "./screens/Portfolio";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Footer from "./components/Footer";

function App() {
  const [showDarkMode, setShowDarkMode] = useState(true);

  const handleMode = () => {
    if (!showDarkMode) {
      setShowDarkMode(true);
    } else {
      setShowDarkMode(false);
    }
  };
  return (
    <Router>
      {/* <Header /> */}
      <main
        className={`min-h-[100vh] h-auto  ${
          showDarkMode ? "dark" : "bg-dash-bg"
        } `}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                handleMode={handleMode}
                showDarkMode={showDarkMode}
                setShowDarkMode={setShowDarkMode}
              />
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
