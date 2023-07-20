import React, { useState } from 'react'
import '../css/liststudent.css'
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import axios from 'axios'
import { useLocation,Link } from 'react-router-dom';
export default function ListStudents() {
    const [pupils, setPupils] = useState([])
    const location = useLocation();
    const level = location.pathname.split('/')[3];
    axios.get(`http://localhost:5000/pupil/afficher/level/${level}`)
        .then(res => {
            setPupils(res.data)
        })
        .catch(err => {
            console.log(err)
        });
        
  const deletePupil=(id) =>{
    axios.delete(`http://localhost:5000/pupil/supprimer/${id}`)
      .then(response => { console.log(response.data)});
        setPupils( pupils.filter(el => el._id !== id)) 
  }
    return (
        <div>
            <Header />
            <Menu />
            <div className="content-wrapper">
                <div className="content-header">
                    <center>
                        <h1><b>List Of Level {level} Students  </b></h1>
                    </center>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {pupils ? pupils.map(user => {
                                return (
                                    <div className="col-lg-4 col-6">
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image">
                                                    <a className="brand-link" >
                                                        <img src={user.photo} className="rounded-circle" style={{ width: "55px", height: "55px" }} />
                                                    </a>
                                                </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0">
                                                        <i className="fas fa-user" /> {user.first_name} {user.last_name}</h4>
                                                    <i className="fas fa-id-card" /> <span>{user.cin}</span><br />
                                                    <i className="fas fa-phone" />  <span>{user.phone}</span><br />
                                                      <span>{user.level} primary year</span>
                                                    <hr className="line-color" />
                                                    <div className="button mt-2 d-flex flex-row align-items-center">
                                                        <button className="btn btn-sm btn-outline-info w-90 ml-1">show</button>

                                                        <Link to={"/updatepupil/" + user._id}>
                                                            <button className="btn btn-sm btn-primary w-90 ml-2">Update</button>
                                                        </Link>
                                                        <a onClick={() => deletePupil(user._id)} >
                                                            <button className="btn btn-sm btn-danger w-90 ml-3">Delete</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}