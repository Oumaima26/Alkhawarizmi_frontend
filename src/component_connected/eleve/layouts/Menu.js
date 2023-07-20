import React from 'react'
import img from '../../../logo/5.png'
export default function Menu() {
    const storedJsonString = localStorage.getItem("pupil");
    const pupil = JSON.parse(storedJsonString);
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ backgroundColor: "#1976D2", height: "100%" }}>
                <a href="index3.html" className="brand-link" style={{ height: "57px" }}>
                    <img src={img} style={{ width: "55px", height: "55px", marginTop: "13px" }} />
                    <span className="brand-text font-weight-light" style={{ color: "white" }}> Alkhawarizmi</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex" style={{ height: "55px" }}>
                        <div className="image">
                            <img src={pupil.photo} className="img-circle elevation-2" alt="User Image" style={{ marginTop: "25px" }} />
                        </div>
                        <div className="info">
                            <a href="/parent/profil" className="d-block" style={{ color: "white" }}>{pupil.first_name} {pupil.last_name}</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                <a href="/parent/home" className="nav-link ">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/parent/listnote" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>Notes Table</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/parent/timetable" className="nav-link">
                                    <i className="nav-icon fa fa-calendar" />
                                    <p>Timetable</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/parent/profile" className="nav-link">
                                    <i className="nav-icon fas fa-user" />
                                    <p>
                                        Profile
                                    </p>
                                </a>
                            </li>


                        </ul>
                    </nav>
                </div>
            </aside>
        </div>

    )
}
