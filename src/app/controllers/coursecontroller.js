const dbcourse = require('../models/course')
const ultimongoObject = require('../../ulti/mongoose.js');

class coursecontroller {
    //GET /course/:slug tìm các slug param trong db để show course tương ứng
    show(req, res, next) {
        var disp = "block";
        dbcourse.findOne({ slug: req.params.slug })
            .then(course => {
                if (course.videoid == "") {
                    disp = "none";
                }
                res.render('course/show', { course: ultimongoObject.singleMongoObject(course), display: disp });
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
        if (formdata.videoid == "") {
            formdata.image = "/img/logo.png"
        } else {
            formdata.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        }

        const course = new dbcourse(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/course'))
            .catch(error => {})
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
        const formdata = req.body;
        if (formdata.videoid == "") {
            formdata.image = "/img/logo.png"
        } else {
            formdata.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        }
        dbcourse.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/course'))
            .catch(next)
    }

    // [POST] /delete/:id
    // delete(req, res, next) {
    //     dbcourse.deleteOne({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next)
    // }

    // [POST] /delete/:id -> softdelete
    delete(req, res, next) {
        dbcourse.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    restore(req, res, next) {
        dbcourse.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [POST] /delete/:id -> softdelete
    deleteforce(req, res, next) {
        dbcourse.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }



    // [POST] /handleform/:id -> softdelete danh sách chọn
    handleform(req, res, next) {

        switch (req.body.action) {
            case 'delete':
                dbcourse.delete({ _id: { $in: req.body.courseid } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.redirect('/');
        }
    }

    // [POST] /handletrash/[:id] -> restore danh sách chọn
    handletrash(req, res, next) {
        switch (req.body.action) {
            case 'restore':
                dbcourse.restore({ _id: { $in: req.body.courseid } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            case 'forcedelete':
                dbcourse.deleteOne({ _id: { $in: req.body.courseid } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.redirect('/');
        }
    }

}

module.exports = new coursecontroller;