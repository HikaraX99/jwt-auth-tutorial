const express = require("express")
const app = express()

const posts = [
    {username: "Nathan",
        title: "Post 1"
    },
    {
        username: "Asuka",
        title: "Post 2"
    }
]

app.get("/posts", (req, res) => {
    res.json(posts)
})

app.get("/login",(res, req) => {
    // Authenticate User
    
})

app.listen(3000)