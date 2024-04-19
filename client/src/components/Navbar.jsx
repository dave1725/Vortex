import About from "./About";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import vortex from "../assets/vortex.png";

export default function Navbar({ type }){
    const navigate = useNavigate();
    return (
        <>
            { type ? (
            <>
            <nav className="navbar">
                <div className="nav-logo">
                    <NavLink to="/"><img src={vortex} height="100" width="150px"></img></NavLink>
                </div>
                <div className="navbar-items">
                <NavLink id="navigator" title="Go to Home Page" to="/">Home</NavLink>
                <NavLink id="navigator" title="Get to know us!" to="/about">About</NavLink>
                <NavLink id="navigator" title="Logout of ERP portal!" to="/logout">Logout</NavLink>
                <button id="navigator-login" title="Login to ERP portal" onClick={() => navigate('/login')}>Login</button>
                </div>
            </nav>
            <div className="nav-line"></div>
            </>
            ):(
                <>
                <nav className="navbar">
                <div className="nav-logo">
                    <NavLink to="/"><img src={vortex} height="100" width="150px"></img></NavLink>
                </div>
                <div className="navbar-items">
                <NavLink id="navigator" title="Go to Home Page" to="/">Home</NavLink>
                <NavLink id="navigator" title="Get to know us!" to="/about">About</NavLink>
                <NavLink id="navigator" title="Logout of ERP portal!" to="/logout">Logout</NavLink>
                </div>
            </nav>
            <div className="nav-line"></div>  
            </>
            )}
        </>
    );
}
