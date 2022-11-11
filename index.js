const express = require ("express")
const cors =require("cors")
const User = require("./db/user")
require("./db/config")

const app = express()
app.use(express.json())
app.use(cors())
app.post("/register", async(req,resp)=>{
    const user = new User(req.body)
    const result = await user.save()
    resp.send(result)
    console.log(result)
})

app.listen(5000)