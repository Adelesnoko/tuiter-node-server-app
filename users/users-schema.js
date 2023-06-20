import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: String,
    firstName: String,
    lastName: String,
    emial: String,
    role: {
        type: String,
        enum: ["admin", "user", "studnet", "faculty"],
        default: "user",
    },
    dob: Date,
    created: {type: Date, default: Date.now},
    married: {type: Boolean, default: false}
    }, 
    { collection: "users" }

);

export default usersSchema;