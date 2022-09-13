const connectToMongo=require('./db')
connectToMongo();
const cors=require('cors')
const express=require('express');

const app=express();
const port=7000;

//Middleware to let access of req.body
app.use(express.json())
app.use(cors());

//MiddleWare to let request to come from any endpoint
// app.use((req,res,next)=>
// {
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Headers','*');
//   next();
// })

app.use('/api/message',require('./Routes/message'));
app.listen(port,()=>
{
    console.log(`Server started at port http://localhost:${port}`);
})





//app.get('/hero',(req,res)=>
// {
//     return res.json({"Message":"Welcome To world Of Crime"})
// })