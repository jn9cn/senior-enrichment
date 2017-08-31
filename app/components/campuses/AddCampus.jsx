import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddCampus extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const inputVal = e.target.value;
        const inputTag = e.target.name;
        this.setState({
            [inputTag]: inputVal
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/campuses/add-campus', this.state);
    }
    
    render() {
        return (
            <div className="well" style={{marginTop: '20px'}}>
                <form onSubmit={this.handleSubmit} className="form-horizontal" >
                    <fieldset>
                        <legend>Add Single Campus</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Campus Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" name='name'onChange={this.handleChange} />
                            </div>
                            <label className="col-xs-2 control-label">Image Link</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" name='imgUrl'onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
};
