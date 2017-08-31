const router = require('express').Router();
const { Campus, Student } = require('../db/models');

module.exports = router;

// GET /api/campuses (all campuses)
router.get('/', (req, res, next) => {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next);
});

// GET /api/campuses/:campusId (a campus by id)
router.get('/:campusId', (req, res, next) => {
	Campus.findById(req.params.campusId)
		.then(campus => res.json(campus))
		.catch(next);
});

// GET /api/campuses/:campusId/students (students by campusId)
router.get('/:campusId/students', function (req, res, next) {
  const campusId = req.params.campusId;

  Student.findAll({ where: { campusId } })
    .then(students => res.json(students))
    .catch(next);
});

// POST /api/addcampus (new campus)
router.post('/add-campus', function (req, res, next) {
	Campus.create(req.body)
		.then(newCampus => res.sendStatus(201).json(newCampus))
		.catch(next);
});

// PUT /api/campuses/:campusId (updated campus info for one campus)
router.put('/:campusId', (req, res, next) => {
	Campus.findById(req.params.campusId)
		.then(campus => campus.update(req.body))
		.then(updatedCampus => res.sendStatus(201).json(updatedCampus))
		.catch(next);
});

// DELETE /api/campuses/:campusId (a campus)
router.delete('/:campusId', function (req, res, next) {
	const id = req.params.campusId;
	
	Campus.destroy({ where: { id } })
		.then(() => res.status(204).end())
		.then(() => res.redirect('/'))
		.catch(next);
});