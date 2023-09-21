import React from 'react'
import logo from '../../assets/images/logo/logo_newstalk.png'

function Header(){
    return (   
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} className="w-50"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active"href="#">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Selebrities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Read Later</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                    <div className="d-flex">
                       <button className="btn btn-outline-success">Sign In</button>
                       <button className="btn btn-outline-success">Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header