import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../src/js/pages/Home";
import Quiz from "../src/js/pages/Quiz";
import Quit from "../src/js/pages/Quit";

export default function App() {
    return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/quiz" element={<Quiz/>}/>
			<Route path="/quit" element={<Quit/>}/>
		</Routes>
    );
}