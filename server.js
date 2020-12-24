import express from 'express';
import mongoose from 'mongoose';
import Card from './dbcards.js';
import bodyParser from 'body-parser';
import cors from 'cors';
const app=express();
const port=process.env.PORT || 8081;
const url=`mongodb+srv://admin:BTbHt87U7sbQVHS@cluster0.hpxrf.mongodb.net/tinderdb?retryWrites=true&w=majority`;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});
app.get('/',(req,res)=>{
    res.send("hello clever programmer");
})

app.post('/cards',(req,res)=>{
    const card=new Card({
        name:req.body.name,
        url:req.body.url
    })
    card.save().then((result)=>res.json(result));
})


app.get('/cards',(req,res)=>{
    Card.find().then((result)=>res.json(result));
})
app.listen(port);