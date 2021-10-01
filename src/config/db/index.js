const mongoose = require('mongoose');
var DBConfig = require('../../../dbconfig.json');


const uri = DBConfig.mongodbUri;

async function connect(connectionString) {
    try {
        await mongoose.connect(uri,);
        console.log("Mongo DB Connected");
    } catch (error) {
        console.log(DBConfig);
        console.log(`Faile: ${error}`);
    }

}

module.exports = { connect };