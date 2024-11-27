const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoURL = 'mongodb+srv://0264547:PtRTk33hxe3KNT@cluster0.rld85.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => console.error('Failed to connect to MongoDB', err));


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
});

app.get('/',(req,res) => {
    res.send("Server is up");
});

const User = mongoose.model('User', UserSchema);

app.post('/signUp', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    const newUser = new User({
        email:email,
        password:password
    })

    const savedUser = await newUser.save();
    res.json(savedUser);
});

app.listen(3000, ()=>{
    console.log("Application Listening on Port 3000");
});