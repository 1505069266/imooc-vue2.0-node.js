let mongoose = require('mongoose')
var Schema = mongoose.Schema;
let produtSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String
})

module.exports = mongoose.model('Good',produtSchema)