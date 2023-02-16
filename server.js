const express = require("express");
const cors = require("cors");
const db = require('./db.json')
const app = express();
const port = 3030
//middleware

app.use(cors())
app.use(express.json())


app.get("/", async (req, res) => {
    res.json(db)
})


app.get("/:login", async (req, res) => {
    const login = req.params.login;
    const filterUsers = db.users.filter(item => item.login.toLowerCase().includes(login.toLowerCase()));
    res.json(filterUsers)
})

app.get("/users/:login", async (req, res) => {
    const login = req.params.login
    const findUser = db.users.find(item => item.login == login);
    res.json(findUser)
})
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})