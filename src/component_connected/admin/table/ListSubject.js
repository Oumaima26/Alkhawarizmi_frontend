import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import SweetAlert from 'react-bootstrap-sweetalert';
const Client = props => (
    <tr>
        <td>{props.client.name}</td>
        <td>{props.client.first_name} {props.client.last_name}</td>
        <td>{props.client.level}</td>
        <td><button>
            <Link to={"/updatesubject/" + props.client._id}>
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
            alert: null
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/subject/')
            .then(subjectResponse => {
                const clients = subjectResponse.data;
                const fetchTeacherPromises = clients.map(subject => {
                    return axios.get(`http://localhost:5000/user/afficher/${subject.teacher}`)
                        .then(teacherResponse => {
                            const teacher = teacherResponse.data;
                            return {
                                ...subject,
                                first_name: teacher.first_name,
                                last_name: teacher.last_name
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


        /*
        axios.get('http://localhost:5000/subject/')
            .then(response => {
                this.setState({ clients: response.data }, () => {
                    this.state.clients.forEach(user => {
                        axios.get(`http://localhost:5000/user/afficher/`+user.teacher)
                            .then(res => {
                                this.setState({
                                    first_name: res.data.first_name,
                                    name: user.name,
                                    level: user.level,
                                    last_name: res.data.last_name
                                });
                                console.log(res.data)
                            })
                            .catch(error => {
                                console.log(error);
                            });
                            console.log(this.state.clients)
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
        /*
        axios.get('http://localhost:5000/subject/')
            .then(response => {
                this.setState({ clients: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        this.state.clients ? this.state.clients.map(user => {
            axios.get('http://localhost:5000/user/64746fdf9539120311d22516')
                .then(res => {
                    this.setState({ first_name: res.data.first_name })
                })
                .catch((error) => {
                    console.log(error)
                }),
                this.setState({
                    name: user.name,
                    level: user.level,
                    first_name: this.state.first_name,
                    last_name: ""
                })
        }) : null*/
    }

    deleteClient(id) {
        axios.delete('http://localhost:5000/subject/supprimer/' + id)
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
                title="Are you sure delete this subject?"
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
                            <Link to="/addsubject">
                                <button className="btn btn-primary" type="submit"
                                    style={{ "float": "right", "position": "relative" }}>
                                    Add Subject</button>
                            </Link>
                            <br />
                            <h1 >
                                <center>
                                    <div >List Of Subject</div>
                                </center>
                            </h1>
                            <br />
                            
                            <form>
                                <table style={{ width: "100%" }} className="table  mx-auto">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Teacher</th>
                                            <th>Level</th>
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