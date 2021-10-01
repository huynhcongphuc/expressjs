const dbcourse = require('../models/course')
const ultimongoObject = require('../../ulti/mongoose.js');
class sitecontroller {
    //GET /
    index(req, res) {
        //dung call back de lay gia tri
        // dbcourse.find({}, (e, course, next) => {
        //     if(!e){
        //         res.json(course);
        //         return
        //     }else{
        //         next(e);
        //     }
        // });

        //dung promise de lay gia tri
        dbcourse.find({})
            .then(course => {
                res.render('home', {
                    course: ultimongoObject.multiMongoObject(course)
                });
            })
            .catch(e => next(e))
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new sitecontroller;