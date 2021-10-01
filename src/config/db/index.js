const mongoose = require('mongoose');


const uri = "mongodb+srv://Mongodb:PuHh1234@cluster0.y7au8.mongodb.net/MongoDB?retryWrites=true&w=majority";

async function connect(connectionString) {
    try {
        await mongoose.connect(uri,);
        console.log("Mongo DB Connected");
    } catch (error) {
        hconsole.log(`Faile: ${error}`);
    }

}

module.exports = { connect };