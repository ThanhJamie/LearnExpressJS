const Course = require('../models/Course')

class SiteController {

    // [GET] hhome
    index(req, res) {

        Course.find({}, function (err, courses) {
            if (!err) return res.json(courses)
            res.status(400).json({ error: 'ERROR' })
        })

        // res.render('home')
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}


module.exports = new SiteController