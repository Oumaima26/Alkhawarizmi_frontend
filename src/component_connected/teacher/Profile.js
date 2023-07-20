import React,{useState} from 'react'
import './css/profile.css'
import Header from './layouts/Header'
import Menu from './layouts/Menu'
import Footer from '../layouts/Footer'
import axios from 'axios'
export default function Profile() {
    const storedJsonString = localStorage.getItem("teacher");
    const id = JSON.parse(storedJsonString).id;    
    const [user, setUser] = useState([])
    axios.get(`http://localhost:5000/user/afficher/`+id)
        .then(res => {
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    return (
        <div>
            <Header />
            <Menu />
            <div className="content-wrapper">
                <section className="content">
                    <div className="row container d-flex justify-content-center"  >
                        <div className="col-xl-6 col-md-12" >
                            <div className="card user-card-full" style={{ width: '100%' }}>
                                <div className="row m-l-0 m-r-0" >
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src={user.photo} className="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 className="f-w-600">{user.first_name} {user.last_name}</h6>
                                            <p>Teacher</p>
                                            <a href={'/teacher/updateprofile/'+user._id}>
                                                <i className="fas fa-edit " />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                
                                            <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{user.email}</h6>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">CIN</p>
                                                    <h6 className="text-muted f-w-400">{user.cin}</h6>
                                                </div>                                                
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Domain</p>
                                                    <h6 className="text-muted f-w-400">{user.domain}</h6>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">{user.phone}</h6>
                                                </div>
                                                
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Date of birth</p>
                                                    <h6 className="text-muted f-w-400">{user.date_birth}</h6>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600">Birthplace</p>
                                                    <h6 className="text-muted f-w-400">{user.birthplace}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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