import mongoose from 'mongoose';

const schema = mongoose.Schema({
    topic: String,
    userName: String,
    title: String,
    time: String,
    image: String,
    tuit: String,
    replies: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number,
    disliked: Boolean,
    liked: Boolean,
    handle: String,
    }, 
    {collection: 'tuits'}
);
export default schema;