import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">Action Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/popular">Popular Movies</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/latest">Latest</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/recent">Revent Relised</a>
                        </li>
                    </ul>
                    <form className="d-flex flex-fill mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
                <div className = 'description container mx-auto'>
                    <h1>Top 16 Action Movies</h1>
                    <p>This is chronological list of action films split by decade. Often there may be considerable overlap particularly between action and other genres (including, horror, comedy, and science fiction films) the lists should attempt to document films which are more closely related to action, even if they bend genres.</p>
                    <h1>Total Views: <span className = 'text-danger'>1500 Million</span></h1>            
                </div>
        </div>
    );
};

export default Header;