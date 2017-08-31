import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllStudents extends Component {
    constructor() {
        super();
        this.state = {
            students: []
        };
    }
    
    componentDidMount() {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => this.setState({students}));
    }

    render() {
        return (
            <div>
                <ul className="media-list">
                    <li>
                        <Link to="/add-student">
                            <button>Add a student</button>
                        </Link>
                    </li>
                    {   this.state.students
                        &&
                        this.state.students.map((student) => 
                            <div key={student.id} className="list-inline">
                                <Link to={`/students/${student.id}`}>
                                <li className="list-inline-item">ID: {student.id}</li>
                                <li className="list-inline-item">Name: {student.name}</li>
                                <li className="list-inline-item">Email: {student.email}</li>
                                </Link>
                                <li><button>Delete</button></li>
                            </div>
                        )
                    }
                </ul>
            </div>
        )
    }
};