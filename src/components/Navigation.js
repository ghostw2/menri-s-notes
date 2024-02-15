import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item p-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        
    );
}
export default Navigation