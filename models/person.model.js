const mongoose = require("mongoose")
const PersonSchema = new mongoose.Schema({
    username: String, 
    role: {$enum: ["USER", "ADMIN"]},
    email: String
})

const PersonModel = mongoose.model("person",PersonSchema)


module.exports = PersonModel