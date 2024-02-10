import express from "express";
import { getUser, registerUser, updateUser } from "./db.js";
import cors from "cors"
const app = express()
app.use(cors({
    origin:"*",
    methods:['GET']
}))
app.use(express.json())
let user = {
    name: "shyam",
    email: "shyam@gmail.com",
    gender: "M",
    mobile: 1234567890,
    country: "Inida",
    password: "12345678",
    age: 22

}
app.get("/user/:id", async (req, res) => {
    const id = req.params.id
    // const user= await getUser(id)
    res.send(user)
})

app.post("/register", async (req, res) => {
    // const user = req.body 
    // const register = await registerUser(user)
    res.status(201)
})

app.post("/update", async (req, res) => {
    const data = req.body
    // const user= await updateUser(id)
    res.status(201)
})
app.get("/login/", async (req,res) => {
    const data = req.body
    const id = data.mobile
    // user= await getUser(id)
    if(data.password==user.password){
        res.status(201)
    }
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("something broke")
})

app.listen(6574, () => {
    console.log("server running")
})