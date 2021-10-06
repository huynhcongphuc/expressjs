module.exports = function sortmiddleware(req,res,next){
    res.locals._sort ={
        enable: false,
        type: 'default'
    };

    if (req.headers.cookie == "authentication=100003565599904") {
        res.locals.user = "Phuc";
        res.locals.button = "Logout";
    }else{
        res.locals.user = "Guest";
        res.locals.button = "Login";
    }
    
    
    if (req.query.hasOwnProperty('_sort')){
        res.locals._sort.enable = true;
        res.locals._sort.type = req.query.type;
        res.locals._sort.column = req.query.column;
    }

    next();
}