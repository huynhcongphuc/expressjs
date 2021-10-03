const dbcourse = require('../models/course')
const ultimongoObject = require('../../ulti/mongoose.js');


class coursecontroller {
    //GET /course/:slug
    storedcourse(req,res, next){
        dbcourse.find({})
            .then(course => {
                res.render('me/storedcourse',{course: ultimongoObject.multiMongoObject(course)})
            })
            .catch(next)
    }

    storedtrash(req,res, next){
        dbcourse.findDeleted({})
            .then(course => {
                res.render('me/trashcourse',{course: ultimongoObject.multiMongoObject(course)})
            })
            .catch(next)
    }
}

module.exports = new coursecontroller;