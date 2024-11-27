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
    name: String,
    email: String,
    password: String
});

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    upvotes: Number,
    downvotes: Number
});

app.get('/',(req,res) => {
    res.send("Server is up");
});

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);

app.post('/signUp', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var user = await User.findOne({email});
    
    if(user){
        return res.status(400).json({message:"Email already corresponds to an account"});
    }
    
    const newUser = new User({
        name:name,
        email:email,
        password:password
    })

    const savedUser = await newUser.save();
    res.json(savedUser);
});

app.post('/addPost', async (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    var upvotes = req.body.upvotes;
    var downvotes = req.body.downvotes;

    const newPost = new Post({
        title: title,
        description: description,
        upvotes:upvotes,
        downvotes:downvotes
    })
    const savedPost = await newPost.save();
    res.json(savedPost);
});

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.listen(3000, ()=>{
    console.log("Application Listening on Port 3000");
});