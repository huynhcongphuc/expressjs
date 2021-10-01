const dbcourse = require('../models/course')
const ultimongoObject = require('../../ulti/mongoose.js');

class coursecontroller {
    //GET /course/:slug
    show(req, res, next) {

        dbcourse.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course/show', { course: ultimongoObject.singleMongoObject(course) });
            })
            .catch(next);
    }

    //create new course
    create(req, res, next) {

        res.render('course/create');
    }

    //[POST] /course/store
    store(req, res, next) {
        const formdata = req.body;
        formdata.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`
        const course = new dbcourse(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => { })
    }

    edit(req, res, next) {
        dbcourse.findById(req.params.id)
            .then(course => {
                res.render('course/edit', { course: ultimongoObject.singleMongoObject(course) });
            })
            .catch(next);
    }

    // [POST] /update/:id
    update(req, res, next) {
        dbcourse.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/course'))
            .catch(next)
    }

    // [POST] /delete/:id
    delete(req, res, next) {
        dbcourse.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new coursecontroller;