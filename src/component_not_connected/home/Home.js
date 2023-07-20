import React from 'react'
import './css/responsive.css'
import './css/style.css'
import admin from "./img/directeur.png";
import teacher from "./img/enseignant.png";
import pupil from "./img/pupil1.png";
export default function Home() {
    return (
        <div className='row full-screen align-items-center' style={{ backgroundColor:"#B3E5FC" }}>
            <div className="home-image" style={{ marginLeft: 60 }}>

                <a href='/signin'>
                    <div className="img-box inner-shadow">
                        <img src={admin} className="outer-shadow" alt="Admin" />
                    </div>
                    <br />
                    <center><label><h3>Admin</h3></label></center>
                </a>
            </div>
            <div className="home-image">
                <a href='/teacher/signin'>
                    <div className="img-box inner-shadow">
                        <img src={teacher} className="outer-shadow" alt="Teacher" />
                    </div>
                    <br />
                    <center><label><h3>Teachers</h3></label></center>
                </a>
            </div>
            <div className="home-image">
                <a href='/parent/signin'>
                    <div className="img-box inner-shadow">
                        <img src={pupil} className="outer-shadow" alt="Pupil" />
                    </div>
                    <br />
                    <center><label><h3>Pupils</h3></label></center>
                </a>
            </div>
        </div>
    )
}
