const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    name: String,
    available: String,
    category: {$enum : ["FOOD", 'PC', 'CLOTH']},
    price: Number
})

const ProductModel = mongoose.model("Person",ProductSchema)


module.exports = ProductModel