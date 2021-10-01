class newscontroller{
    //GET /news
    index(req,res){
        //render page with Template Engines - da khai bao engine o indexjs
        res.render('news');
    }

    show(req,res){
        //render page with Template Engines - da khai bao engine o indexjs
        res.send("abc");
    }
}

module.exports = new newscontroller;