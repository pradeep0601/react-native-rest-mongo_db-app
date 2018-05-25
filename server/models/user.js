import mongoose, { Schema } from 'mongoose';

//define user schema

const userSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    name: String,
    userName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    mobile: Number,
    gender: String,
    address: String
});

// export mongoose model

export default mongoose.model('user', userSchema);
