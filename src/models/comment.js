import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    date_of_post: {type: Date, required: true},
    authorId: {type: Schema.Types.ObjectId, ref: "User"},
    postId: {type: Schema.Types.ObjectId, ref: "Post"},
    context: {type: String, required: true}
});
const Comment = mongoose.model("Comment", schema);
export default Comment;

