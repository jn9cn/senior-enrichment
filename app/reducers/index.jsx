import { combineReducers } from 'redux'

const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer;


// import { combineReducers } from 'redux';
// import axios from 'axios';

// const initialState = {}

// // ACTION TYPES
// const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'; // Get all campuses
// const GET_CAMPUS_BY_STUDENT = 'GET_CAMPUS_BY_STUDENT'; // Get a student's campus
// const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'; // Get/edit a campus
// const ADD_CAMPUS = 'ADD_CAMPUS' // Add a campus

// const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'; // Get all students
// const GET_STUDENTS_BY_CAMPUS = 'GET_STUDENTS_BY_CAMPUS'; // Get all a campus's students
// const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';// Get/edit a student
// const ADD_STUDENT = 'ADD_STUDENT';// Add a campus

// // ACTION CREATORS
// export function getCampuses(campuses){
//   const action = {type: GET_ALL_CAMPUSES, campuses};
//   return action;
// }

// export function getCampusByStudent(campus){
//   const action = {type: GET_CAMPUS_BY_STUDENT, campus};
//   return action;
// }

// export function addCampus(campus){
//   const action = {type: ADD_CAMPUS, campus};
//   return action;
// }

// export function setCampus(campus){
//   const action = {type: SET_SINGLE_CAMPUS, campus};
//   return action;
// }

// export function getStudents(students){
//   const action = {type: GET_ALL_STUDENTS, students};
//   return action;
// }

// export function getStudentsByCampus(students){
//   const action = {type: GET_STUDENTS_BY_CAMPUS, students};
//   return action;
// }

// export function setStudent(student){
//   const action = {type: SET_SINGLE_STUDENT, student};
//   return action;
// }

// export function addStudent(student){
//   const action = {type: ADD_STUDENT, student};
//   return action;
// }

// // THUNK CREATORS
// export function fetchAllCampuses(){
//   return function thunk (dispatch){
//     return axios.get('api/campuses')
//     .then(res => res.data)
//     .then(campuses => {
//       const action = getcampuses(campuses);
//       dispatch(action);
//     })
//   }
// }

// export function fetchAllStudents(){
//   return function thunk (dispatch){
//     return axios.get('/api/students')
//     .then(res => res.data)
//     .then(students =>{
//       const action = getStudents(students);
//       dispatch(action);
//     })
//   }
// }

// export function fetchSingleStudent(studentId){
//   return function thunk (dispatch){
//     axios.get(`/api/students/${studentId}`)
//     .then(res => res.data)
//     .then(data => {
//       const action = setStudent(data);
//       dispatch(action);
//     })
//   }
// }

// export function fetchSingleCampus(campusId){
//   return function thunk (dispatch){
//     axios.get(`/api/campuses/${campusId}`)
//     .then(res => res.data)
//     .then(data => {
//       const action = setCampus(data);
//       dispatch(action);
//     })
//   }
// }

// export function fetchStudentsByCampus(campusId){
//   return function thunk (dispatch){
//     return axios.get(`/api/campuses/${campusId}`);
//     .then(res => res.data)
//     .then(data => {
//       console.log("fetch students from campus, WHAT IS DATA >>>>>", data)
//       const students = data[0].Student;
//       const action = getStudentsByCampus(students);
//       dispatch(action);
//     })
//   }
// }

// export function fetchCampusByStudent(studentId){
//   return function thunk(dispatch){
//     return axios.get(`/api/students/${studentId}`);
//     .then(res => res.data)
//     .then(data => {
//       const action = getCampusByStudents(data);
//       dispatch(action);
//     })
//   }
// }

// export function addCampus(newCampus){
//   return function thunk(dispatch){
//     return axios.post('api/campuses', newCampus);
//     .then(res => res.data)
//     .then(data => {
//       const action = addCampus(data);
//       dispatch(action);
//     })
//   }
// }

// export function addStudent(state){
//   return function thunk(dispatch){
//     return axios.post('api/students', state);
//   }
// }

// // REDUCER
// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     case GET_ALL_CAMPUSES:
//       return Object.assign({}, state, {campuses: action.campuses});
//     case GET_ALL_STUDENTS:
//       return Object.assign({}, state, {students: action.students});
//     case GET_STUDENTS_BY_CAMPUS:
//       return Object.assign({}, state, {students: action.students});
//     case GET_CAMPUS_BY_STUDENT:
//       return Object.assign({}, state, {campus: action.campus});
//     case SET_SINGLE_CAMPUS:
//       return Object.assign({}, state, {campus: action.campus});
//     case SET_SINGLE_STUDENT:
//       return Object.assign({}, state, {student: action.student});
//     case ADD_CAMPUS:
//       return Object.assign({}, state, {campuses: state.campuses.push(action.campus)});
//     case ADD_STUDENT:
//       return Object.assign({}, state, {students: state.students.push(action.student)});
//     default:
//       return state
//   }
// };

// export default rootReducer;