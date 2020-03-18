import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    date: {type: Date, required: true},
    post_type: {type: Boolean, required: true}, //True is selling, False is requesting
    itemId: {type: Schema.Types.ObjectId, required: true, ref: "Item"},
    buyerId: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    sellerId: {type: Schema.Types.ObjectId, required: true, ref: "User"},
    successful: {type: Boolean}
});
const Order = mongoose.model("Order", schema);
export default Order;

