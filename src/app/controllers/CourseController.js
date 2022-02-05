const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class CourseController {

    // [GET] search
    show(req, res) {
        res.send('Course Details');
    }
}


module.exports = new CourseController