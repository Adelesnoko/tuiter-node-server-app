import mongoose from 'mongoose';

const schema = mongoose.Schema({
    topic: { type: String, default: "Undefined" },
    userName: String,
    title: { type: String, default: "NA" },
    time: { type: String, default: Date.now },
    image: String,
    tuit: String,
    replies: { type: Number, default: 0 },
    retuits: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    disliked: { type: Boolean, default: false },
    liked: { type: Boolean, default: false },
    handle: { type: String, default: "@" },
    }, 
    {collection: 'tuits'}
);
export default schema;