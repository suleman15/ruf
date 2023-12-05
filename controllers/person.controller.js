const PersonModel = require("../models/person.model");
let {getPerson, createPerson, deletePerson} = require("../services/person.service")


exports.personGet =  async(req, res) => {
    let personList = await getPerson();
    console.log('This is running')
    res.status(200).json(personList)
}


exports.personPost = async(req, res) => {
    let data = await createPerson(req.body);
    res.status(200).json(data)
}


exports.personUpdate =async(req, res) => {
    let {id,updatedPerson} = req.body;
    let personKey = Object.keys(updatedPerson)
    let obj = {}
    for(let key of personKey) {
        obj[key] = updatedPerson[key]
    }    
    let data = await updatedPerson(id, updatedPerson);
    console.log(data);
    res.status(200).json(data)
}

exports.personDelete =async(req, res) => {
    let data = await deletePerson(req.body.id)
    res.status(200).json(data)
}