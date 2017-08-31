import React from 'react';
import { HashRouter, Route, Switch, Link  } from 'react-router-dom';

import HomePage from './HomePage';
import Navbar from './Navbar';
import AllCampuses from './campuses/AllCampuses';
import SingleCampus from './campuses/SingleCampus';
import AddCampus from './campuses/AddCampus';
import AllStudents from './students/AllStudents';
import SingleStudent from './students/SingleStudent';
import AddStudent from './students/AddStudent';

const Root = () => {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path='/campuses/:campusId' component={SingleCampus} />
          <Route path='/add-campus' component={AddCampus} />
          <Route exact path='/campuses' component={AllCampuses} />
          <Route path='/students/:studentid' component={SingleStudent} />
          <Route exact path='/add-student' component={AddStudent} />
          <Route exact path='/students' component={AllStudents} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </HashRouter>
  )
}
export default Root;

{/* <Route path={`/campuses/${id}`} component={SingleCampus} />
<Route path='/campus/add-campus' component={AddCampus} />
<Route exact path='/students' component={AllStudents} />
<Route path={`/students/${id}`} component={SingleStudent} /> */}