const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongodelete = require('mongoose-delete');
//tu tao slug bang name


const Schema = mongoose.Schema;
const course = Schema({
    name: { type: String },
    description: { type: String },
    content: { type: String },
    image: { type: String },
    videoid: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});
//custom querry sort dbcourse

course.query.sortable = function(req){
    if(req.query.hasOwnProperty('_sort')){
        const isValidtype = ['asc','desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc'
        });
    }else{
        return this
    }
}



//add cac thu vien
mongoose.plugin(slug);
course.plugin(mongodelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('course', course);