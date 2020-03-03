import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    view: {type: Number, required: true, default: 0},
    date_of_post: {type: Date, required: true},
    post_type: {type: Boolean, required: true}, //True is selling, False is requesting
    item: {type: Schema.Types.ObjectId, required: true, ref: "Item"},
    expire_date: {type: Date, required: true},
    poster: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    isDone: {type: Schema.Types.ObjectId, ref: "Order"}
});
const Post = mongoose.model("Post", schema);
export default Post;

