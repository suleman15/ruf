const PersonModel = require("../models/person.model")

exports.getPerson  = async () => {
    let data = await PersonModel.find()
    return data
}

exports.createPerson = async(newPerson) => {
    let data = await PersonModel.create(newPerson) 
    return data
}

exports.updatePerson = async(id, obj) => {
    let data = await PersonModel.findByIdAndUpdate(id, obj)
    return data
}


exports.deletePerson = async(id) => {
    let data = await PersonModel.findByIdAndDelete(id);
    return  data
}