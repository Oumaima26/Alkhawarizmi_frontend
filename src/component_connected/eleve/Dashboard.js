import React, { Component } from 'react'
import Header from './layouts/Header'
import Menu from './layouts/Menu'
import Footer from '../layouts/Footer'



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img8 from "./img/8.jpg";
import logo from "./img/5.png";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <div className="content-wrapper" >
                    <div className="content-header">
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                
                            <section className="col-lg-6 col-6 connectedSortable">
                                    <div className="card" style={{ position: 'relative', height: 280, width: 540 }}>
                                        <div className="card-body">
                                            <div className="tab-content p-0">
                                                <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 250, width: 500 }}>
                                                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                                        <SwiperSlide>
                                                            <img src={img3} alt='' style={{ marginTop: '40px' }} />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img src={img1} alt='' />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img src={img2} alt='' />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img src={img4} alt='' />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                                
                                <div className="col-lg-3 col-6">
                                    <div className="small-box "style={{backgroundColor:"#B3E5FC"}}>
                                        <br />
                                        <h5 style={{ color: '#0056B3' }}>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</h5>
                                        <br />
                                    </div>
                                    <div className="small-box "style={{backgroundColor:"#B3E5FC"}}>
                                        <br />
                                        <h5 style={{ color: '#0056B3' }}>"Education is the key to success in life, and teachers make a lasting impact in the lives of their students." - Solomon Ortiz</h5>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box ">
                                        <center>
                                            <img src={img8} alt='' style={{ marginTop: '30px' }} />
                                        </center>
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
}
