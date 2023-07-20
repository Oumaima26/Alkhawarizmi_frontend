import React, { Component } from 'react'
import Header from './layouts/Header'
import Menu from './layouts/Menu'
import Footer from '../layouts/Footer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-6">
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>150</h3>
                                            <p>Number Of Teachers</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                            <p> Number Of Students</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>

        )
    }
}
