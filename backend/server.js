const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoutes = require("./routes/data");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/joiExample")
app.use('/api/data', dataRoutes);

app.listen(5000,()=>{
    console.log('Backend is running on 5K')
})