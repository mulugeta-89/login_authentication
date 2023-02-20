const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")
const UserSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
})
UserSchema.plugin(passportLocalMongoose)
const Users = mongoose.model("User", UserSchema)
module.exports = Users;