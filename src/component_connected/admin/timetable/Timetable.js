import * as React from 'react';
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import { Link } from 'react-router-dom';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
export default function Timetable() {
    const storedJsonString = localStorage.getItem("timetablepupil");
    const docs = JSON.parse(storedJsonString).map(time => (
        {
            uri: time.timetable
        }));
   /* const docs = [
        { uri: require("../../files/1.pdf") }, // Remote file
        // { uri: require("../../files/2.pdf") }, // Local File
    ];*/
    return (
        <>
            <Header />
            <Menu />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2" style={{ "float": "right", "position": "relative" }}>
                            <Link to="/addtimetablepupil">
                                <button className="btn btn-primary" type="submit"
                                    style={{ "float": "right", "position": "relative" }}>
                                    <i className="fa fa-plus" /> Add Timetable Pupil
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <DocViewer
                            documents={docs}
                            initialActiveDocument={docs[1]}
                            pluginRenderers={DocViewerRenderers}
                            config={{ header: { disableHeader: true } }}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}