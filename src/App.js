import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
