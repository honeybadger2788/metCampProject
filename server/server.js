const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRouter')

mongoose.connect(
    'mongodb+srv://root:root@cluster0.i5ctc.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err,res) => {
        if(err){
            throw err
        } else {
            console.log('baseOnLine')
        }
    }
)

app.use(cors());
app.use(bodyParser.json())

app.set("port", process.env.PORT || 8080);

app.use('/api',userRouter);

app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
})
