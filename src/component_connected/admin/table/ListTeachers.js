import React, { useState } from 'react'
import '../css/listteacher.css'
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import { Link } from 'react-router-dom';
import axios from 'axios'
import SweetAlert from 'react-bootstrap-sweetalert';
export default function ListTeachers() {

  const nextPath = (path) => {
    window.location = path;
  }
  const [teacher, setTeacher] = useState([])
  const [alert, setAlert] = useState(null)
  axios.get('http://localhost:5000/user/teacher')
    .then(res => {
      setTeacher(res.data)

    })
    .catch(err => {
      console.log(err)
    });
  const deletePupil = (id) => {
    axios.delete(`http://localhost:5000/user/supprimer/${id}`)
      .then(response => { console.log(response.data) });
    setTeacher(teacher.filter(el => el._id !== id))
    setAlert(null)
  }
  const deleteThisGoal = (e, id) => {
    e.preventDefault();
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Supprimer"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Are you sure delete this teacher?"
        onCancel={() => onCancelDelete()}
        onConfirm={() => deletePupil(id)}
      >
      </SweetAlert>
    );
    setAlert(getAlert());
  }
  const onCancelDelete = () => {
    setAlert(null)
  }
  return (
    <div>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <div className="content-header">
        </div>
        <section className="content">
          <center>
            <h3>List Of Teachers</h3>
          </center>
          {alert}
          <div className="container-fluid">
            <div className="row">
              {teacher ? teacher.map(user => {
                return (
                  <div className="col-lg-4 col-6">
                    <div className="card p-4 mt-3">
                      <div className="first">
                        <Link to={"/showteacher/" + user._id}>
                          <button className="btn btn-info w-90 " style={{ "float": "right", "position": "relative" }}>
                            <i className="fa fa-clock-o" /> Show
                          </button>
                        </Link>
                        <h4 className="heading"><i className="fas fa-user" />  {user.first_name} {user.last_name}</h4>
                      </div>
                      <div className="second d-flex flex-row mt-1">
                        <div className="image">
                          <a className="brand-link" >
                            <img src={user.photo} className="rounded-circle" style={{ width: "55px", height: "55px" }} />
                          </a>
                        </div>
                        <div className>
                          <div className="d-flex flex-row mb-1">
                            <i className="fas fa-book" /><span>{user.domain}</span>
                          </div>
                          <div>
                            <i className="fas fa-envelope" /><span>{user.email}</span>
                            <br />
                            <i className="fas fa-phone" /><span>{user.phone}</span>
                          </div>
                        </div>
                      </div>
                      <hr className="line-color" />
                      <div className="third mt-4 button d-flex flex-row align-items-center">
                        <button className="btn btn-secondary w-90  ml-1"><i className="fa fa-clock-o" />
                          <a href={"/addtimetable/" + user._id} style={{ color: "white" }}>Add Timetable</a>
                        </button>
                        <Link to={"/updateteacher/" + user._id}>
                          <button className="btn btn-primary w-90 ml-2"><i className="fa fa-clock-o" /> Update</button>
                        </Link>
                        <a onClick={(e) => deleteThisGoal(e, user._id)} >
                          <button className="btn btn-danger  w-90 ml-3"><i className="fa fa-clock-o" /> Delete</button>
                        </a>
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
/*
                    
                        <a href="index3.html" className="brand-link" style={{ height: "57px" }}>
                          <img src={user.photo} style={{ width: "55px", height: "55px", marginTop: "13px" }} />
                        </a>
                            */