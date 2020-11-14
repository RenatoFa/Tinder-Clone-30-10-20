import express from "express";
import mongoose from "mongoose";
import Cors from 'Cors'

import Cards from "./dbCards.js";

// 1 App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url ="mongodb+srv://admin:IfHMONTkixt5oaqd@cluster0.ftrc6.mongodb.net/tinderdb?retryWrites=true&w=majority";

// 2 Middlewares

app.use(express.json())
app.use(Cors())

// 3 DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// 4 API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard,(err,data)=>{
      if(err){
          res.status(500).send(err)
      }else{
          res.status(201).send(data)
      }
  })
});

app.get('/tinder/cards', (req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
    
})

// 5 Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));
