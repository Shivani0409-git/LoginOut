const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/login");

mongoose.connection.on("connected",()=>{
    console.log("connected to MongoDB");
});

mongoose.connection.on("error",()=>{
    console.error(`MongoDB connection error:${err}`);
})

module.exports = mongoose;