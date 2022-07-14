const express= require("express");
const app= express();
app.use(express.json());
const DB_connect = require("./DB_connect");
require("dotenv").config();
DB_connect();

app.use("/Person", require("./routes/PersonRouter"));

app.listen(process.env.PORT, (err)=> err
? console.log(err)
: console.log("server is running"));