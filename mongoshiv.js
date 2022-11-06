const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    }
});
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;