import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Header from "./Header";
import Checkout from "./Checkout";


function App() {
	return (
		// BEM
		<Router>
			<div className="app">
				<Header /> 
				<Routes> 
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
