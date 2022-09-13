const mongoose=require('mongoose');
const Pusher = require('pusher');

const mongoURL="mongodb://localhost:27017/whatsappClone?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


const connectToMongo =  ()=>
{
mongoose.connect(mongoURL,()=>
{
  console.log("Connected TO Mongo Successfully");  //Asynchronus Working Of function
 
})
}


const pusher = new Pusher({
    appId: "1428502",
    key: "70994d9d1ff12be93d74",
    secret: "e4b6ab29796d3d771c97",
    cluster: "ap2",
    useTLS: true
  });

//Code To see change in Mongo db When change is bring int it by any way
//Replica Set task has to be done in mongd.cnf file
//**Important
const db = mongoose.connection
db.once("open", () => {
const collection = db.collection("messages")
const changeStream = collection.watch()
changeStream.on('change', (change) => {
  console.log("Change is there",change)

  if(change.operationType=="insert")
  {
    const messagedetails=change.fullDocument;
    pusher.trigger('messages','inserted',   ///pusher line in app.js takes data from here
    {
      name:messagedetails.name,
      messagesent:messagedetails.messagesent,
      timestamp:messagedetails.timestamp,
      received:messagedetails.received
    }
    )

    console.log("triggered");
  }
  else
  {
    console.log('Error TRiggering Pusher');
  }
});
}
)
//////////
module.exports=connectToMongo;