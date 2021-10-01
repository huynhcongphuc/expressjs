const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
//tu tao slug bang name
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const course = Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String},
    videoid: {type: String},
    level: {type: String},
    slug: {type: String, slug: 'name', unique: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('course',course);