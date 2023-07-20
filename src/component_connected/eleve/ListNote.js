import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './layouts/Header'
import Sidebar from './layouts/Menu'
import Footer from './../layouts/Footer'
const Client = props => (
    <tr>
        <td>{props.client.name}</td>
        <td>{props.client.note1}</td>
        <td>{props.client.note2} </td>
        <td>{props.client.note3}</td>
        <td>{props.client.mean}</td>
    </tr>
)

export default class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            subjects: [],
            id: JSON.parse(localStorage.getItem("pupil")).id
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/note/getbypupil/'+this.state.id)
            .then(subjectResponse => {
                const clients = subjectResponse.data;
                const fetchTeacherPromises = clients.map(note => {
                    return axios.get(`http://localhost:5000/subject/afficher/${note.subject}`)
                        .then(teacherResponse => {
                            const pupil = teacherResponse.data;
                            return {
                                ...note,
                                name: pupil.name,
                            };
                        })
                        .catch(error => {
                            console.log(error);
                            return note;
                        });
                });

                Promise.all(fetchTeacherPromises)
                    .then(updatedSubjects => {
                        this.setState({ clients: updatedSubjects });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }
    clientList() {
        return this.state.clients.map(currentclient => {
            return <Client client={currentclient}  key={currentclient._id} />;
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content-header">
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <h1 >
                                <center>
                                    <div >List Of Note</div>
                                </center>
                            </h1>
                            <br />
                            
                            <form>
                                <table style={{ width: "100%" }} className="table  mx-auto">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Note 1</th>
                                            <th>Note 2</th>
                                            <th>Note 3</th>
                                            <th>Mean</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.clientList()}
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}