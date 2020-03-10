import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    auth_id : {type: String},
    first_name : {type: String, required: true},
    last_name : {type: String, required: true},
    email: {type: String, required: true},
    list_of_bought: [{type: Schema.Types.ObjectId, ref: "Order"}],
    list_of_sold: [{type: Schema.Types.ObjectId, ref: "Post"}],
    list_of_requested: [{type: Schema.Types.ObjectId, ref: "Post"}],
    list_of_accepted: [{type: Schema.Types.ObjectId, ref: "Order"}],
    //rating: {type: Number, required: true, default: 0},
    //numbers_of_rate: {type: Number, required: true, default: 0},
    phone_number: {type: String}
});
const User = mongoose.model("User", schema);
export default User;