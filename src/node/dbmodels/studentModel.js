import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    coursingYear: {
        type: Number,
        required: true
    },
    major: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Student = mongoose.model('Student', studentSchema);

export default Student;