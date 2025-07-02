import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

class Navbar extends Component {
    render (){
        return (
            <form>
                <div className='row'>
                <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <NavLink className="nav-link active" to="/" exact>Home
                                <span className="visually-hidden">(current)</span>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/features" exact>Features
                            </NavLink></li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/blog" exact>Blog Personal</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false" exact>Dropdown</NavLink>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/" exact>Action</NavLink>
                                <NavLink className="dropdown-item" to="/"exact>Another action</NavLink>
                                <NavLink className="dropdown-item" to="/"exact>Something else here</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/">Separated link</NavLink>
                            </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>
                   
                </div>

            </form>
        );
    }
}
export default Navbar;