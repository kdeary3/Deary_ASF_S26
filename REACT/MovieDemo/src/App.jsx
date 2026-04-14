import Navbar from "./components/navbar.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import AppRoutes from "./components/approutes.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <AppRoutes/>
            </Router>

        </>
    );
};

export default App;