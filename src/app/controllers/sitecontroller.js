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
                    course: ultimongoObject.multiMongoObject(course),
                    user: res.locals.user,
                    button: res.locals.button
                });
            })
            .catch(e => next(e))
    }

    search(req, res) {
        res.render('search');
    }

    loginout(req, res) {
        if (req.headers.cookie == "authentication=underfined") {
            res.render('login');

        } else {
            res.cookie("authentication", "underfined", { maxAge: 60 * 60 * 1000 });
            res.locals.user = "Guest";
            res.locals.button = "Login";
            res.redirect('/');
        }
    }

    checklogin(req, res) {
        if (req.body.username == "phuchc" && req.body.password == "193782") {
            res.cookie("authentication", "100003565599904", { maxAge: 60 * 60 * 1000 });
            res.locals.user = "Phuc";
            res.locals.button = "Logout";
            res.redirect('/');
        } else {
            res.render('login', {
                text: "Sai username hoặc password"
            });
        }
    }
}

module.exports = new sitecontroller;