const { constants } = require("buffer")
const express=require("express")
// it will require the express dot js 
const app=express()
// it will start the express.js 
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const tempelates=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatespath)
app.use(express.urlencoded({extended:false}))
// this line be used for running hbs code in the node 


app.get("/",(req,res)=>{
    res,render("login")
    // login.hbs file
})
app.get("/signup",(req,res)=>{
    res,render("signup")
    // signup.hbs file
})

app.post("/signup",async(req)=>{
const data={
    name:req.body.name,
    password:req.body.password
}
await collection.insretmany([data])
// syntax of coonecting mongodb
res.render("home")
// 33 indicates the user detail will enter amnd the home page will displayed

})

app.post("/login",async(req,res)=>{
    try{
        const check =await collection.fingone({name:req.body.name})

        if(check.password===req.body.password){
            res,render("home")
        }
        else{
            res.send("wrong password")
        }
    }

    catch{
        res.send('wrong details')
    }
})





app.listen(3000,()=>{
    // 3000 is port no and usin arrow function  the port is connected the o/p will be port connected 
    console.log("port coonected");
})