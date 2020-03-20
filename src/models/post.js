import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    view: {type: Number, required: true, default: 0},
    date_of_post: {type: Date, required: true},
    post_type: {type: Boolean, required: true}, //True is selling, False is requesting
    itemId: {type: Schema.Types.ObjectId, required: true, ref: "Item"},
    expire_date: {type: Date, required: true},
    posterId: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    commentIds: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    isDone: {type: Boolean}
});
const Post = mongoose.model("Post", schema);
export default Post;

