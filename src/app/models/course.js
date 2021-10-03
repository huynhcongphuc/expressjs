const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongodelete = require('mongoose-delete');
//tu tao slug bang name


const Schema = mongoose.Schema;
const course = Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoid: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});

//add cac thu vien
mongoose.plugin(slug);
course.plugin(mongodelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('course', course);