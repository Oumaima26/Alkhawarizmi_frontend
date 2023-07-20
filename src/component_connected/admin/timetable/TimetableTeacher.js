import React, { useState, useEffect } from 'react';
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
export default function TimetableTeacher() {
    const storedJsonString = localStorage.getItem("timetable");
    const docs = JSON.parse(storedJsonString).map(time => (
        {
            uri: time.timetable
        }));
    return (
        <>
            <Header />
            <Menu />
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <DocViewer
                                documents={docs}
                                initialActiveDocument={docs[1]}
                                pluginRenderers={DocViewerRenderers}
                                config={{ header: { disableHeader: true } }}
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}