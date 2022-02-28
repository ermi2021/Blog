const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type:String,
        required: false,
        unique: true,
        trim: false,
    },
    content:{
        type:String,
        required:true,
        unique:true,
        trim:false,
    },
    category: {
        type:String,
        required:true,
    }, 
    refernces: {
        type:String,
        required:false
    }      
}, {
    timestamps:true
});

const User = mongoose.model('Post', postSchema);

module.exports = User;