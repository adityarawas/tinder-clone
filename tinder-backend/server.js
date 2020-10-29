import express from 'express';
import mongoose from 'mongoose'
import Cards from './models.js'
import Cors from 'cors';
// APP CONFIG
const app = express();
const port = process.env.PORT || 8001;
const connection_url  = `mongodb+srv://admin:61yZgBY3acy1gGwe@cluster0.edgcc.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// MIDDLEWARE
app.use(express.json());
app.use(Cors());


//DB CONFIG
mongoose.connect(
    connection_url,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);

//API ENDPOINT
app.get('/',(req, res)=>res.status(200).send("Hello World!!"));
app.post('/tinder/card',(req, res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err, data)=> {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});


app.get('/tinder/card',(req, res)=>{
    const dbCard = req.body;
    Cards.find((err, data)=> {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});
//LISTENER 
app.listen(port, ()=> console.log(`Listening to localhost ${port}`));