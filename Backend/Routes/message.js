const express = require("express");
const router = express.Router();
const message=require('../Models/Message')

//sending Message
router.post('/', async (req,res)=>
{
    newmessage=await message.create({
    messagesent:req.body.messagesent,
    name:req.body.name,
    timestamp:new Date().toUTCString(),
    received:req.body.received
    }
    );
    return res.json({"message":"MessageSent","ActualMessage":newmessage})
    
})
//Synchronizing Old messages
router.get('/sync',async (req,res)=>
{
  oldmessagearray=await message.find()
  if(!oldmessagearray)
  {
    return res.json({"Verdict":"No Message Available"})
  }
  else
  {
    return res.json({"Message":oldmessagearray})
  }
})
module.exports = router;