const express = require("express");
const signupRouter = require("./routes/signup.js");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/user", signupRouter)

app.listen(PORT,()=>{
    console.log(`server is running on https://localhost:${PORT}`);
})