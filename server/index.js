const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
app.use(express.json())


const userRouter = require('./routes/userRouter') 
// conexao banco 
mongoose.connect('mongodb://localhost/redePost')
let db = mongoose.connection
db.on('error', ()=>{console.log('banco deu ruim')})
db.once('open',()=>{console.log('banco deu bom')})

app.use('/',userRouter)


app.listen(3001,()=>{
    console.log('servidor rodando');
})