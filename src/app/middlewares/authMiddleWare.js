module.exports.requireAuth = function (req, res, next) {
    console.log();
    if (req.headers.cookie == "authentication=100003565599904") {
        res.cookie("authentication", "100003565599904", { maxAge: 60 * 60 * 1000 });
        res.locals.user = "Phuc";
        res.locals.button = "Logout";
        next();
    } else {
        res.render('login');
        return;
    }
};