import React from "react";
import Home from './pages/Home'
import SignIn from "./pages/SignIn";

import { Routes, Route} from 'react-router-dom'

export default function Rotas() {
	return (

			<Routes>
				 <Route exact path="" element={<Home />} />
				<Route path='/' element={Home} />
				<Route path='/sign-in' element={SignIn} />
			</Routes>

	)
}