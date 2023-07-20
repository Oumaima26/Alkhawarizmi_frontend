import React from 'react'
import img from '../../../logo/5.png'
import axios from 'axios';
export default function Menu() {
    const nextPath = (path) => {
        window.location = path;
    }
    const storedJsonString = localStorage.getItem("teacher");
    const teacher = JSON.parse(storedJsonString);
    const afficher=() => {
        axios.get('http://localhost:5000/timetable/getbyteacher/64746fdf9539120311d22516')
            .then(res => {
                localStorage.setItem("timetableteacher", JSON.stringify(res.data[0].timetable))
                nextPath('/teacher/timetable')
            })
            .catch(err => {
                console.log(err);
            });
    }
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
                            <img src={teacher.photo} className="img-circle elevation-2" alt="User Image" style={{ marginTop: "25px" }} />
                        </div>
                        <div className="info">
                            <a href="/teacher/profil" className="d-block" style={{ color: "white" }}>{teacher.first_name} {teacher.last_name}</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item menu-open">
                                <a href="/teacher/home" className="nav-link ">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/teacher/listlevel" className="nav-link">
                                    <i className="nav-icon fas fa-users" />
                                    <p>Students Table</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/teacher/listnote" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>Notes Table</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={afficher} className="nav-link">
                                    <i className="nav-icon fa fa-calendar" />
                                    <p>Timetable</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/teacher/listclasse" className="nav-link" style={{ color: "white" }}>
                                    <i className="nav-icon fas fa-user-plus" />
                                    <p>
                                        Add Note
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/teacher/profile" className="nav-link">
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
