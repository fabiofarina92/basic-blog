import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postsCounterSchema = new Schema({
    _id: Number,
    seq: Number
});

const exportModel = mongoose.model('PostsCounter', postsCounterSchema);

export default exportModel;
