import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudents extends Component {
    constructor() {
        super();
        this.state = {
            student: {},
            campus: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() {
        const studentId = this.props.match.params.studentid;
        const grabStudenById = axios.get(`/api/students/${studentId}`)
        const grabCampusByStudent = axios.get(`/api/students/${studentId}/campus`)

        Promise.all([grabStudenById, grabCampusByStudent])
            .then(resArr => resArr.map(res => res.data))
            .then(studentInfoArr => {
                console.log(studentInfoArr);
                const student = studentInfoArr[0];
                const campus = studentInfoArr[1];
                this.setState({student, campus});
        })
    }

    handleChange(e) {
        const inputVal = e.target.value;
        const inputTag = e.target.name;
        // console.log("[" + e.target.name + "] : " + e.target.value)
        this.setState({
            [inputTag]: inputVal
        });
    }

    handleSubmit(e) {     
        e.preventDefault();
        axios.put(`/api/students/${this.state.student.id}`, this.state)
        // .then(res => res.data)
        // .then(updatedStudent => this.setState({updatedStudent}))
        // .catch(error => console.error(error))
    }

    handleDelete(e) {
        e.preventDefault();
        axios.delete(`/api/students/${this.state.student.id}`)
    }

    render() {
        // console.log("for delete fx", this.state.student)
        const student = this.state.student;
        return (
            <div className="col-md-8 col-md-offset-2">
                <h2 className="boldL">{student.name}</h2>
                    <ul className="list-inline">
                        <li className="list-inline-item">ID: {student.id}</li>
                        <li className="list-inline-item">Name: {student.name}</li>
                        <li className="list-inline-item">Email: {student.email}</li>
                        
                        <li className="list-inline-item">
                            <Link to={`/campuses/${student.campusId}`}>
                                Campus: {this.state.campus.name} (Click to view campus)
                            </Link>
                        </li>
                            <ul className="list-inline">
                                <li className="list-inline-item">Campus #: {this.state.campus.id}</li>
                                <li className="list-inline-item">Campus Image: 
                                    <img src={this.state.campus.imgUrl} />
                                </li>
                            </ul>
                        <h3> Edit Current Student </h3>    
                        <li>
                            <form onSubmit={this.handleSubmit} className="form-inline">
                                <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                <input onChange={this.handleChange} name="name" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder={student.name}>
                                </input>
                                <label className="sr-only" htmlFor="inlineFormInput">Email</label>
                                <input onChange={this.handleChange} name="email" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder={student.email}>
                                </input>
                                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Campus</label>
                                <select onChange={this.handleChange} name="campusId" className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                                <option defaultValue="Choose">Choose...</option>
                                <option value="1">Luna</option>
                                <option value="2">Terra</option>
                                <option value="3">Mars</option>
                                <option value="3">Titan</option>
                                </select>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </li>
                        <li>
                            <form onSubmit={this.handleDelete}>
                                <button >Delete Student</button>
                            </form>
                        </li>
                    </ul>

            </div>

        )
    }
};