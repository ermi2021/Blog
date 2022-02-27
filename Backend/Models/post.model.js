const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type:String,
        required: false,
        unique: true,
        trim: false,
    },           
}, {
    timestamps:true
});

const User = mongoose.model('Post', postSchema);

module.exports = User;