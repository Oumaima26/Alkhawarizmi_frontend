import * as React from 'react';
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
export default function Timetable() {
    const docs = [
        //{ uri: require("../../files/1.pdf") }, // Remote file
        { uri: require("../../files/2.pdf") }, // Local File
      ];
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
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}