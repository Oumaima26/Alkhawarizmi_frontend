import React, { Component } from 'react'
//import './css/updateprofile.css'
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import axios from 'axios';
export default class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCin = this.onChangeCin.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
        this.onChangeLast_name = this.onChangeLast_name.bind(this);
        this.onChangeFirst_name_father = this.onChangeFirst_name_father.bind(this);
        this.onChangeLast_name_father = this.onChangeLast_name_father.bind(this);
        this.onChangeFirst_name_mother = this.onChangeFirst_name_mother.bind(this);
        this.onChangeLast_name_mother = this.onChangeLast_name_mother.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            first_name: '',
            last_name: '',
            first_name_father: '',
            last_name_father: '',
            first_name_mother: '',
            last_name_mother: '',
            level: 0,
            phone: 0,
            cin: 0,
            address: '',
            photo: '',
            id: window.location.pathname.split('/')[2]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/pupil/afficher/' + this.state.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    first_name_father: response.data.first_name_father,
                    last_name_father: response.data.last_name_father,
                    first_name_mother: response.data.first_name_mother,
                    last_name_mother: response.data.last_name_mother,
                    level: response.data.level,
                    phone: response.data.phone,
                    cin: response.data.cin,
                    photo: response.data.photo,
                    address: response.data.address
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeFirst_name(event) {
        this.setState({
            first_name: event.target.value
        });
    }
    onChangeLast_name(event) {
        this.setState({
            last_name: event.target.value
        });
    }
    onChangeFirst_name_father(event) {
        this.setState({
            first_name_father: event.target.value
        });
    }
    onChangeLast_name_father(event) {
        this.setState({
            last_name_father: event.target.value
        });
    } onChangeFirst_name_mother(event) {
        this.setState({
            first_name_mother: event.target.value
        });
    }
    onChangeLast_name_mother(event) {
        this.setState({
            last_name_mother: event.target.value
        });
    }
    onChangeLevel(event) {
        this.setState({
            level: event.target.value
        });
    }
    onChangePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }
    onChangeCin(event) {
        this.setState({
            cin: event.target.value
        });
    }
    onChangeAddress(event) {
        this.setState({
            address: event.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const client = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            first_name_father: this.state.first_name_father,
            last_name_father: this.state.last_name_father,
            first_name_mother: this.state.first_name_mother,
            last_name_mother: this.state.last_name_mother,
            cin: Number(this.state.cin),
            level: Number(this.state.level),
            phone: Number(this.state.phone),
            address: this.state.address
        }
        console.log(client);
        axios.post('http://localhost:5000/pupil/update/' + this.state.id, client)
            .then(res => {
                console.log(res.data)
                window.location = '/liststudents/'+this.state.level;
            });
    }
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <div className="content-wrapper">
                   {/*<div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                            </div>
                        </div>
                    </div>*/}
                    <section className="content">
                        <div className="row container d-flex justify-content-center"  >
                            <div className="col-xl-10 col-md-12" >
                                <div className="container rounded bg-white mt-6 ">
                                    <div className=" text-center">
                                        <br />
                                        <h3>Update Profile</h3>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-4 border-right">
                                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                                <img className="rounded-circle mt-5" width="150px" src={this.state.photo} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 border-right">
                                            <div className="p-3 py-5">
                                                <div className="row mt-2">
                                                    <div className="col-md-12">
                                                        <label className="labels">First Name</label>
                                                        <input
                                                            className="form-control"
                                                            required
                                                            type="text"
                                                            name="first_name"
                                                            value={this.state.first_name}
                                                            onChange={this.onChangeFirst_name}
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label className="labels">Last Name</label>
                                                        <input
                                                            className="form-control"
                                                            required
                                                            type="text"
                                                            name="last_name"
                                                            value={this.state.last_name}
                                                            onChange={this.onChangeLast_name}
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label className="labels">Level</label>
                                                        <input
                                                            className="form-control"
                                                            required
                                                            type="text"
                                                            name="level"
                                                            value={this.state.level}
                                                            onChange={this.onChangeLevel}
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label className="labels">CIN</label>
                                                        <input
                                                            className="form-control"
                                                            required
                                                            type="text"
                                                            name="cin"
                                                            value={this.state.cin}
                                                            onChange={this.onChangeCin}
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <label className="labels">Phone</label>
                                                        <input
                                                            className="form-control"
                                                            required
                                                            type="text"
                                                            name="phone"
                                                            value={this.state.phone}
                                                            onChange={this.onChangePhone}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="p-3 py-5">

                                                <div className="col-md-12">
                                                    <label className="labels">Father's First Name</label>
                                                    <input
                                                        className="form-control"
                                                        required
                                                        type="text"
                                                        name="first_name_father"
                                                        value={this.state.first_name_father}
                                                        onChange={this.onChangeFirst_name_father}
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="labels">Father's Last Name</label>
                                                    <input
                                                        className="form-control"
                                                        required
                                                        type="text"
                                                        name="last_name_father"
                                                        value={this.state.last_name_father}
                                                        onChange={this.onChangeLast_name_father}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="labels">Mother's First Name</label>
                                                    <input
                                                        className="form-control"
                                                        required
                                                        type="text"
                                                        name="first_name_mother"
                                                        value={this.state.first_name_mother}
                                                        onChange={this.onChangeFirst_name_mother}
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="labels">Mother's Last Name</label>
                                                    <input
                                                        className="form-control"
                                                        required
                                                        type="text"
                                                        name="last_name_mother"
                                                        value={this.state.last_name_mother}
                                                        onChange={this.onChangeLast_name_mother}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="labels">Address</label>
                                                    <input
                                                        className="form-control"
                                                        required
                                                        type="text"
                                                        name="address"
                                                        value={this.state.address}
                                                        onChange={this.onChangeAddress}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <button className="btn btn-primary profile-button" type="button" onClick={this.onSubmit}>Update Pupil</button>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
                <Footer />
            </div >
        )
    }
}










/*import React, { Component } from 'react'
import '../css/liststudent.css'
import Header from '../layouts/Header'
import Menu from '../layouts/Menu'
import Footer from '../../layouts/Footer'
import axios from 'axios'
import '../css/update.css'
export default class ListStudents extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeCin = this.onChangeCin.bind(this);
        this.onChangeFirstnamefather = this.onChangeFirstnamefather.bind(this);
        this.onChangeLastnamefather = this.onChangeLastnamefather.bind(this);
        this.onChangeFirstnamemother = this.onChangeFirstnamemother.bind(this);
        this.onChangeLastnamemother = this.onChangeLastnamemother.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            first_name: '',
            last_name: '',
            cin: 0,
            phone: 0,
            first_name_father: '',
            last_name_father: '',
            first_name_mother: '',
            last_name_mother: '',
            address: '',
            id: window.location.pathname.split('/')[2]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/pupil/afficher/' + this.state.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    cin: response.data.cin,
                    phone: response.data.phone,
                    first_name_father: response.data.first_name_father,
                    last_name_father: response.data.last_name_father,
                    first_name_mother: response.data.first_name_mother,
                    last_name_mother: response.data.last_name_mother,
                    address: response.data.address
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeFirstname(e) {
        this.setState({
            first_name: e.target.value
        })
    }
    onChangeLastname(e) {
        this.setState({
            last_name: e.target.value
        })
    }
    onChangeFirstnamefather(e) {
        this.setState({
            first_name_father: e.target.value
        })
    }
    onChangeLastnamefather(e) {
        this.setState({
            last_name_father: e.target.value
        })
    }
    onChangeFirstnamemother(e) {
        this.setState({
            first_name_mother: e.target.value
        })
    }
    onChangeLastnamemother(e) {
        this.setState({
            last_name_mother: e.target.value
        })
    }
    onChangeCin(e) {
        this.setState({
            cin: e.target.value
        })
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const client = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            cin: this.state.cin,
            first_name_father: this.state.first_name_father,
            last_name_father: this.state.last_name_father,
            first_name_mother: this.state.first_name_mother,
            last_name_mother: this.state.last_name_mother,
            address: this.state.address,
            phone: this.state.phone,
            level:5
        }
        console.log(client);
        axios.put('http://localhost:5000/pupil/update/' + this.state.id, client)
            .then(res => {
                console.log(res.data)
                window.location = '/home';
            });
    }
    render() {

        return (
            <div>
                <Header />
                <Menu />

                <div className="content-wrapper">
                    <section className="content">
                        <div className="container-fluid">
                            <div className="wrapperu">

                                <center>
                                    <br />
                                </center>
                                <div className="form-wrapperu">
                                    <h1 >
                                        <center>
                                            <div >Update Profile</div>
                                        </center>
                                    </h1>
                                    <br />
                                    <form onSubmit={this.onSubmit}>
                                        <div className="produit">
                                            <label htmlFor="nom">Fist Name :</label>
                                            <input
                                                className="form-control"
                                                required
                                                type="text"
                                                name="first_name"
                                                value={this.state.first_name}
                                                onChange={this.onChangeFirstname}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="prenom">Last Name :</label>
                                            <input
                                                className="form-control"
                                                required
                                                type="text"
                                                name="last_name"
                                                value={this.state.last_name}
                                                onChange={this.onChangeLastname}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="nom">Fist Name Father:</label>
                                            <input
                                                className="form-control"
                                                required
                                                type="text"
                                                name="first_name_father"
                                                value={this.state.first_name_father}
                                                onChange={this.onChangeFirstnamefather}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="prenom">Last Name Father :</label>
                                            <input
                                                className="form-control"
                                                required
                                                type="text"
                                                name="last_name_father"
                                                value={this.state.last_name_father}
                                                onChange={this.onChangeLastnamefather}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="nom">Fist Name Mother:</label>
                                            <input
                                                className="form-control"
                                                required
                                                type="text"
                                                name="first_name_mother"
                                                value={this.state.first_name_mother}
                                                onChange={this.onChangeFirstnamemother}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="prenom">Last Name Mother:</label>
                                            <input
                                                className="form-control"
                                                required
                                                type="text"
                                                name="last_name_mother"
                                                value={this.state.last_name_mother}
                                                onChange={this.onChangeLastnamemother}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="email">Cin :</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                required
                                                name="cin"
                                                value={this.state.cin}
                                                onChange={this.onChangeCin}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="email">Phone :</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                required
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.onChangePhone}
                                            />
                                        </div>
                                        <div className="produit">
                                            <label htmlFor="email">Address :</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                required
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.onChangeAddress}
                                            />
                                        </div>
                                        <div className="ajouter">
                                            <input type="submit" value="Update" className="btn btn-primary" style={{ width: '100%' }} />
                                        </div>
                                    </form>
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
*/