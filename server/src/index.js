import express from 'express'
import mongoose from 'mongoose'

const app = express();

try{
    const uri = 'mongodb://localhost:27017/blog-system'
    await mongoose.connect(uri)
    console.log('DB connected!')
}catch(err){
    console.log('Connection to DB failed');
    console.log(err.message)
}

app.listen(3000, () => console.log('RESTful service is running on http://localhost:3000...'))