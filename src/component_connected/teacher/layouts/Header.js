import React from 'react'

export default function Header() {
    const nextPath = (path) => {
        window.location = path;
    }
    const onclick = () => {
        localStorage.removeItem("teacher");
        nextPath('/')
    }
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/home" className="nav-link">Home</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i className="fas fa-search" />
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-controlsidebar-slide="true" href="/teacher/profile" role="button">
                            <i className="fas fa-user" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-controlsidebar-slide="true" href="/" role="button" onClick={onclick}>
                            <i className="fas fa-sign-out-alt" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}