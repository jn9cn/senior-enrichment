import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleCampus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campus: {},
            students: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteCampus = this.handleDeleteCampus.bind(this);
        this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
    }
    
    componentDidMount() {
        const campusId = this.props.match.params.campusId;
        const grabCampusById = axios.get(`/api/campuses/${campusId}`);
        const grabStudentsByCampus = axios.get(`/api/campuses/${campusId}/students`);

        Promise.all([grabCampusById, grabStudentsByCampus])
            .then(resArr => resArr.map(res => res.data))
            .then(campusInfoArr => {
                // console.log(campusInfoArr);
                const campus = campusInfoArr[0];
                const students = campusInfoArr[1];
                this.setState({campus, students});
            });
    }

    handleChange(e) {
        const inputVal = e.target.value;
        const inputTag = e.target.name;
        // console.log("[" + e.target.name + "] : " + e.target.value)
        this.setState({
            [inputTag]: inputVal
        })
    }

    handleSubmit(e) {     
        e.preventDefault();
        axios.put(`/api/campuses/${this.state.campus.id}`, this.state)
        // .then(res => res.data)
        // .then(updatedStudent => this.setState({updatedStudent}))
        // .catch(error => console.error(error))
    }

    handleDeleteCampus(e) {
        e.preventDefault();
        axios.delete(`/api/campuses/${this.state.campus.id}`)
    }

    handleDeleteStudent(id) {
        axios.delete(`/api/students/${id}`)
    }

    render() {
        console.log(this.state)
        return (
            <div className="col-md-8 col-md-offset-2">
                <h2 className="boldL">Welcome to {this.state.campus.name} Campus</h2>
                    <ul className="list-inline">
                        <li className="list-inline-item">Campus Id: {this.state.campus.id}</li>
                        <li className="list-inline-item">Campus Image: 
                            <img src={this.state.campus.imgUrl} />
                        </li>
                        <h3> Edit Current Campus </h3>    
                        <li>
                            <form onSubmit={this.handleSubmit} className="form-inline">
                                <label className="sr-only" htmlFor="inlineFormInput">Campus Name</label>
                                <input onChange={this.handleChange} name="name" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder={this.state.campus.name}>
                                </input>
                                <label className="sr-only" htmlFor="inlineFormInput">Campus Image</label>
                                <input onChange={this.handleChange} name="imgUrl" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder={this.state.campus.imgUrl}>
                                </input>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </li>
                        <li>
                            <form onSubmit={this.handleDeleteCampus}>
                                <button>Delete Campus</button>
                            </form>
                        </li>
                    </ul>
                <h3>Current Students</h3>
                {
                    this.state.students.map(student => 
                        <ul key={student.id} className="list-inline">
                            <Link to={`/students/${student.id}`}>
                            <li className="list-inline-item">ID: {student.id}</li>
                            <li className="list-inline-item">Name: {student.name}</li>
                            <li className="list-inline-item">Email: {student.email}</li>
                            </Link>
                            <li>
                            <button onClick={() => this.handleDeleteStudent(student.id)}>Delete Student</button>
                            </li>
                        </ul>
                    )
                }
            </div>
        )
    }
};