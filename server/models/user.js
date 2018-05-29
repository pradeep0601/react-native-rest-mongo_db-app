import mongoose, { Schema } from 'mongoose';

//define user schema

const userSchema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    isvegan: boolean
});

// export mongoose model

export default mongoose.model('user', userSchema);
