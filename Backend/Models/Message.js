const mongoose=require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
 name:{
     type:String
    
 },
 messagesent:{
     type:String
    
 },
 timestamp:{
     type:String
 },
 received:{
    type:Boolean,
    
 },
date:{
    type:Date,
    default:Date.now
}
});
const Message=mongoose.model('messages',MessageSchema)
Message.createIndexes();
module.exports=Message;