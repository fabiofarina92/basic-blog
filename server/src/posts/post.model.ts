import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postsSchema = new Schema({
    _id: Number,
    content: { type: String },
    created: { type: Date, default: Date.now },
    post: { type: String },
    postFormat: { type: String },
    title: { type: String }
});

const exportModel = mongoose.model('Posts', postsSchema);

export default exportModel;
