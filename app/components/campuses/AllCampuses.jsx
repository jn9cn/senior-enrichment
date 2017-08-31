import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import store from '../store';
// import { fetchAllCampuses } from '../reducers/index';


export default class AllCampuses extends Component {
    constructor() {
        super();
        this.state = {
            campuses: []
        };
    }
    
    componentDidMount() {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({campuses}));
    }

    render() {
        console.log(this.state.campuses)
        return (
        <div>
            <section id="campuses" className="ptb-80">
                <div className="wow fadeInLeft container text-center">
                    <h2 className="boldL">Campuses</h2>
                        <Link to="/add-campus">
                            <button>Add a Campus</button>
                        </Link>
                    <div className="spacer-60"></div>
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            {   this.state.campuses
                                &&
                                this.state.campuses.map(
                                    (campus) => 
                                    <div key={campus.id}>
                                    <Link to={`/campuses/${campus.id}`}>
                                        <h3 className="boldL">{campus.name}</h3>
                                        <img src={campus.imgUrl} />
                                    </Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    
        )}

};

