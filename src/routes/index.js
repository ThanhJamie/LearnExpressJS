const newRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')


function router(app) {
    
    app.use('/news', newRouter)
    app.use('/courses', coursesRouter)
    
    app.use('/', siteRouter)

}

module.exports = router