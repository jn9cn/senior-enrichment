import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import store from '../../store'

export default class AddStudent extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({campuses}));
    }
    
    handleChange(e) {
        const inputVal = e.target.value;
        const inputTag = e.target.name;
        this.setState({
            [inputTag]: inputVal
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/students/add-student', this.state)
    }

    render() {
        console.log("on change", this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                    <input onChange={this.handleChange} name="name" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Margaret Hamilton">
                    </input>
                    <label className="sr-only" htmlFor="inlineFormInput">Email</label>
                    <input onChange={this.handleChange} name="email" type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Marg@mhijs.com">
                    </input>
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Campus</label>
                    <select onChange={this.handleChange} name="campusId" className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                      <option defaultValue="Choose">Choose...</option>
                            {   this.state.campuses
                                &&
                                this.state.campuses.map(
                                    (campus) => 
                                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                                )
                            }
                    </select>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    
        )

    }

};

