import React from 'react';
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
export default function Timetable() {
    //const [docs, setDocs] = useState([]);
    //const storedJsonString = localStorage.getItem("teacher");
    //const teacher = JSON.parse(storedJsonString).id;
    /*useEffect(() => {
        axios.get('http://localhost:5000/timetable/getbyteacher/64746fdf9539120311d22516')
            .then(res => {
                console.log(res.data[0].timetable)
                setDocs(res.data.map(time => (
                    {
                        uri: time.timetable
                    }))
                    )
            })
            .catch(err => {
                console.log(err);
            });
    }, []);*/
    const ss = localStorage.getItem("timetableteacher");
    const docs =[ 
        {
            uri: JSON.parse(ss)
        }];
    console.log(docs)
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