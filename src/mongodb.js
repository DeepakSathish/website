const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginsignuptutorial")
.then(()=>{
console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})
// line 3 this commend is used for connect the node to the mongo db 
const mongoclient = mongo.mongoclient;
let dbstring = "mongodb+srv://deepak:deepak@cluster0.toal2av.mongodb.net/loginsignuptutorial?retryWrites=true&w=majority";
let dbName='loginsignuptutorial';

mongodb.coonect(dbstring,{useNewUrlparser:true,useunifiedTopology: true},function(err,client){
    // useunified topology is complsury used in cuurent verion of mongo db and err vantha athaa ena papanum sollrak if laa throw paanrom
    if (err){
      throw err
  
    }
      db = client.db(dbName)
})

const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:trusted
    },
    password:{
        type:String,
        required:trusted
// this all are schema for the document
    }
})

const collection=new mongoose.model("collection",loginSchema)

module.export=collection
// 26 line indicates the index.js and mongo db file connection