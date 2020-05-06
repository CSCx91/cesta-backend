import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    condition: {type: Number, required: true}, //ENUM for the state of the item (New, refurbish, ..)
    description: {type: String, required: true},
    pictures: [{type: String}],
    category: {type: String},
    negotiable: {type: Boolean}
});
const Item = mongoose.model("Item",schema);
export default Item;