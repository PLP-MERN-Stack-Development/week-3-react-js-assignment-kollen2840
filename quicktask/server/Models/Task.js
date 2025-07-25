const mongoose = require("mongoose");

const TaskShema = new mongoose.Schema({
    text: { type: String, required : true},
    content: {type: String, required: true},
    completed: {type: Boolean, default: false},
});

module.exports = mongoose.model("Task", TaskShema)