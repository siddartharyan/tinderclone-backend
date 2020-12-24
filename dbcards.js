import mongoose from 'mongoose';
const cardsschema=new mongoose.Schema({
    name:String,
    url:String
})

export default mongoose.model('Card',cardsschema);