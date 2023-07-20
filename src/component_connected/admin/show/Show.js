import React, { useState } from 'react'
//import '../css/show.css'
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom';
export default function Show() {
    const [user, setUser] = useState([])
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    axios.get(`http://localhost:5000/pupil/afficher/` + id)
        .then(res => {
            setUser(res.data)
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        });
    return (
        <div>
            <Header />
            <Menu />
            <div className="content-wrapper">
                <Link to={'/liststudents/' + user.level}>
                    <button className="btn btn-primary" type="submit"
                        style={{ "float": "right", "position": "relative" }}>
                        List Pupil</button>
                </Link>
                <section className="content">
                    <div className="row container d-flex justify-content-center"  >
                        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                            <div className="card p-4">
                                <div className=" image d-flex flex-column justify-content-center align-items-center">
                                    <button className="btn"> <img src={user.photo} height={100} width={100} /></button>
                                    <span className="name mt-3">Pupil Full Name : {user.first_name} {user.last_name}</span>
                                    <span className="idd">Level : {user.level}</span>
                                    <span className="idd">Gender : {user.gender}</span>
                                    <span className="idd">Date Birth : {user.date_birth}</span>
                                    <span className="idd">Birthplace : {user.birthplace}</span>
                                    <span className="idd">Father's Full Name : {user.first_name_father} {user.last_name_father}</span>
                                    <span className="idd">Mother's Full Name : {user.first_name_mother} {user.last_name_mother}</span>
                                    <span className="idd">CIN : {user.cin} </span>
                                    <span className="idd">Phone Number : {user.phone} </span>
                                    <span className="idd">Address : {user.address} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}