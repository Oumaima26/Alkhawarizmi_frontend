import React from 'react'
import '../css/liststudent.css'
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import img1 from '../../number/1.png'
import img2 from '../../number/2.png'
import img3 from '../../number/3.png'
import img4 from '../../number/4.png'
import img5 from '../../number/5.png'
import img6 from '../../number/6.png'
export default function ListClasses() {
    return (
        <div>
            <Header />
            <Menu />
            <div className="content-wrapper">
                <div className="content-header">
                    <center>
                        <h1><b>List Of Classes</b></h1>
                    </center>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-primary">
                                    <a href={"/teacher/addnote/" + 1}>
                                        <img src={img1} style={{ width: "50%", height: "50%", marginTop: "50px", marginLeft: "75px" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-secondary">
                                    <a href={"/teacher/addnote/" + 2}>
                                        <img src={img2} style={{ width: "50%", height: "50%", marginTop: "50px", marginLeft: "75px" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-success">
                                    <a href={"/teacher/addnote/" + 3}>
                                        <img src={img3} style={{ width: "50%", height: "50%", marginTop: "50px", marginLeft: "75px" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-danger">
                                    <a href={"/teacher/addnote/" + 4}>
                                        <img src={img4} style={{ width: "50%", height: "50%", marginTop: "50px", marginLeft: "75px" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-warning">
                                    <a href={"/teacher/addnote/" + 5}>
                                        <img src={img5} style={{ width: "50%", height: "50%", marginTop: "50px", marginLeft: "75px" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="small-box bg-info">
                                    <a href={"/teacher/addnote/" + 6}>
                                        <img src={img6} style={{ width: "50%", height: "50%", marginTop: "50px", marginLeft: "75px" }} />
                                    </a>
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
