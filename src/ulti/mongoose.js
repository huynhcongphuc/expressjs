module.exports = {
    multiMongoObject: function(mongos){
        return mongos.map(mongos => mongos.toObject());
    },
    singleMongoObject: function(mongo){
        return mongo.toObject();
    },
}