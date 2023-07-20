import React from 'react'
import img from '../../../logo/5.png'
import axios from 'axios';
export default function Menu() {
    const nextPath = (path) => {
        window.location = path;
    }
    const storedJsonString = localStorage.getItem("admin");
    const admin = JSON.parse(storedJsonString);
    const afficher = () => {
        axios.get('http://localhost:5000/timetable')
            .then(res => {
                localStorage.setItem("timetable", JSON.stringify(res.data))
                nextPath('/timetableteacher')
            })
            .catch(err => {
                console.log(err);
            });
    }
    const affichertimetablepupil= () => {
        axios.get('http://localhost:5000/timetablepupil')
            .then(res => {
                localStorage.setItem("timetablepupil", JSON.stringify(res.data))
                nextPath('/timetablepupil')
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ backgroundColor: "#1976D2", height: "100%" }}>
                <a href="/" className="brand-link" style={{ height: "57px" }}>
                    <img src={img} style={{ width: "55px", height: "55px", marginTop: "13px" }} />
                    <span className="brand-text font-weight-light" style={{ color: "white" }}> Alkhawarizmi</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex" style={{ height: "55px" }}>
                        <div className="image">
                            <img src={admin.photo} className="img-circle elevation-2" alt="User Image" style={{ marginTop: "25px" }} />
                        </div>
                        <div className="info">
                            <a href="/profil" className="d-block" style={{ color: "white" }}>{admin.first_name} {admin.last_name}</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                <a href="/home" className="nav-link " style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item" style={{ color: "white" }}>
                                <a href="/listclasse" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-table" />
                                    <p>Classes Table</p>
                                </a>
                            </li>
                            <li className="nav-item" style={{ color: "white" }}>
                                <a href="/listpupil" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-table" />
                                    <p>Pupils Table</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/listteacher" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-table" />
                                    <p>Teachers Table</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/listsubject" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-table" />
                                    <p>Subject Table</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={affichertimetablepupil} className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fa fa-calendar" />
                                    <p>Timetable Pupil</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={afficher} className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fa fa-calendar" />
                                    <p>Timetable Teacher</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/profile" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-user" />
                                    <p>
                                        Profile
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/addteacher" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-user-plus" />
                                    <p>
                                        Add Teacher
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/addpupil" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-user-plus" />
                                    <p>
                                        Add Pupil
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
