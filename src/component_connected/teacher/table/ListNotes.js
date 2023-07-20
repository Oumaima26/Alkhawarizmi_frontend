import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import SweetAlert from 'react-bootstrap-sweetalert';
const Client = props => (
    <tr>
        <td>{props.client.cin}</td>
        <td>{props.client.first_name} </td>
        <td>{props.client.last_name}</td>
        <td>{props.client.note1}</td>
        <td>{props.client.note2} </td>
        <td>{props.client.note3}</td>
        <td>{props.client.mean}</td>
        <td><button>
            <Link to={"/modifierclient/" + props.client._id}>
                <i className="nav-icon fa fa-edit" style={{ "fontSize": "25px" }}></i>
            </Link></button>
            <button>
                <a href="/client" onClick={(e) => { props.deleteThisGoal(e, props.client._id) }}>
                    <i className="nav-icon fa fa-trash" style={{ "fontSize": "25px" }}></i>
                </a></button>
        </td>
    </tr>
)

export default class ListSubject extends Component {
    constructor(props) {
        super(props);

        this.deleteProduitClient = this.deleteClient.bind(this)
        this.deleteThisGoal = this.deleteThisGoal.bind(this)
        this.onCancelDelete = this.onCancelDelete.bind(this)

        this.state = {
            clients: [],
            subjects: [],
            first_name: '',
            last_name: '',
            cin:0,
            alert: null
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/note/')
            .then(subjectResponse => {
                const clients = subjectResponse.data;
                const fetchTeacherPromises = clients.map(subject => {
                    return axios.get(`http://localhost:5000/pupil/afficher/${subject.pupil}`)
                        .then(teacherResponse => {
                            const pupil = teacherResponse.data;
                            return {
                                ...subject,
                                first_name: pupil.first_name,
                                last_name: pupil.last_name,
                                cin: pupil.cin
                            };
                        })
                        .catch(error => {
                            console.log(error);
                            return subject;
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

    deleteClient(id) {
        axios.delete('http://localhost:5000/note/supprimer/' + id)
            .then(response => { console.log(response.data) });
        this.setState({
            clients: this.state.clients.filter(el => el._id !== id),
            alert: null
        })
    }

    deleteThisGoal(e, id) {
        e.preventDefault();
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Supprimer"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title="Are you sure delete this note?"
                onCancel={() => this.onCancelDelete()}
                onConfirm={() => this.deleteClient(id)}
            >
            </SweetAlert>
        );

        this.setState({
            alert: getAlert()
        });
    }
    onCancelDelete() {
        this.setState({
            alert: null
        });
    }

    clientList() {
        return this.state.clients.map(currentclient => {
            return <Client client={currentclient} deleteThisGoal={this.deleteThisGoal} key={currentclient._id} />;
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
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Note 1</th>
                                            <th>Note 2</th>
                                            <th>Note 3</th>
                                            <th>Mean</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.clientList()}
                                    </tbody>
                                </table>{this.state.alert}
                            </form>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}