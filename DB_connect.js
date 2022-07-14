const mongoose = require("mongoose");

const DB_connect = async () => {
    try{
        await mongoose.connect(
            process.env.DB_URI,
            { useNewUrlParser: true, 
                useUnifiedTopology: true }
        );
        console.log(("database connected"));
    }
    catch(err){
        console.log(err);
    }
   };
   module.exports = DB_connect;