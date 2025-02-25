const expresss = require('express');
const mongoose = require('mongoose');
require('dotenv').config;

const { Item, Restaurant } = require('./RestaurantSchema');

const PORT = process.env.PORT || 3001;

const app = expresss();

app.listen(PORT, ()=>{
    console.log(`Server running on the PORT: ${PORT}`);
})
 




