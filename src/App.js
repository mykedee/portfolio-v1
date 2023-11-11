import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

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
				</Routes>
			</main>
		</Router>
	);
}

export default App;
