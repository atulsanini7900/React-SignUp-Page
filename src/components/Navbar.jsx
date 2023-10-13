import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./myNav.css"
const Navbar = () => {
    return (


        <div className="m-4">
            <nav className="navbar navbar-expand-lg navbar-light text-white">
                <div className="container-fluid">
                    <a href="#" className="navbar-hover navbar-brand text-white">
                        Startup 3
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="#" className=" navbar-hover nav-item nav-link text-white">
                                Overview
                            </a>
                        </div>
                        <div className="navbar-nav">
                            <a href="#" className=" navbar-hover nav-item nav-link active text-white">
                                Price
                            </a>
                            <a href="#" className=" navbar-hover nav-item nav-link text-white">
                                Blog
                            </a>
                            <a href="#" className="navbar-hover nav-item nav-link text-white">
                                Feedback
                            </a>
                            <a href="#" className=" navbar-hover nav-item nav-link text-white" tabIndex={-1}>
                                Pirchase
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
