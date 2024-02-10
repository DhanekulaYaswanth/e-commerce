const express = require('express')
const path = require('path');
const cors = require('cors')

const uploadImagesAndUpdateMongoDB = require('./Cloudinary/ImageUpload');
const getproducts = require('./Mongodb/GetProductData')




const app = express();

const corsOptions = {
    origin: 'https://dhanekulayaswanth.github.io',
};

app.use(cors(corsOptions));



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/uploaddata',(req,res)=>{
    uploadImagesAndUpdateMongoDB();
})


app.get('/getproducts',async(req,res)=>{
    var data = await getproducts();
    res.send(data)
})




