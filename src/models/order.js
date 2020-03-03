import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    view: {type: Number, required: true, default: 0},
    date: {type: Date, required: true},
    post_type: {type: Boolean, required: true}, //True is selling, False is requesting
    item: {type: Schema.Types.ObjectId, required: true, ref: "Item"},
    buyer: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    seller: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    successful: {type: Boolean}
});
const Order = mongoose.model("Order", schema);
export default Order;

