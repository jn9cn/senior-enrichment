const router = require('express').Router();
const { Student, Campus } = require('../db/models');

module.exports = router;

// GET /api/students (all students)
router.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

// GET /api/students/:studentId (a student by id)
router.get('/:studentId', function (req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

// GET /api/students/:studentId/campus (a campus by studentId)
router.get('/:studentId/campus', function (req, res, next) {
	const studentId = req.params.studentId;

  Student.findById(studentId)
    .then(student => {
      // console.log(">>>>>", student.dataValues.campusId)
      return Campus.findById(student.dataValues.campusId)
        .then(campus => res.json(campus))
    })
		.catch(next);
});

// POST /api/students (new student)
router.post('/add-student', function (req, res, next) {
  Student.create(req.body)
		.then(newStudent => res.sendStatus(201).json(newStudent))
		.catch(next);
});

// POST /api/students/:studentId/campus (add campus to new student)
router.post('/:studentId', function(req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => student.setCampus(req.body.campusId))
    .then(student => res.json(student))
    .catch(next);
})

// PUT /api/students/:studentId (updated student info for one student)
router.put('/:studentId', function (req, res, next) {
  console.log("My put is working!")
  Student.findById(req.params.studentId)
    .then(student => {
      console.log(student, "<<<")
      console.log(req.body, "<<<<<")
      return student.update(req.body)
    })
    .then(updatedStudent => res.status(201).json(updatedStudent))
    .catch(next);
});

// DELETE /api/students/:studentId (a student)
router.delete('/:studentId', function (req, res, next) {
  const id = req.params.studentId;
  
  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .then(() => res.redirect('/'))
    .catch(next);
});