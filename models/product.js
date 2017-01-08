/**
 * Created by nihit on 12/18/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath : {type : String, required: true},
    title : {type : String, required: true},
    description : {type : String, required: true},
    price : {type : String, required: true},
});

module.exports = mongoose.model('Product', schema);