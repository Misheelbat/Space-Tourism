import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useBgContext } from './context/BgContext';
//pages and components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Tech from './pages/tech/Tech';

//styles
import './App.css';

function App() {
	const currentPage = useBgContext();
	return (
		<div className={`App ${currentPage.page}`}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/Space-Tourism/" element={<Home />} />
					<Route path="/Space-Tourism/destination" element={<Destination />} />
					<Route path="/Space-Tourism/crew" element={<Crew />} />
					<Route path="/Space-Tourism/tech" element={<Tech />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
