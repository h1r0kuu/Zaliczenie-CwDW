require("dotenv").config()
const express = require("express")
const app = express()

const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send({text: "Index page"})
})

app.get("/about", (req, res) => {
    res.send({text: "About us page"})
})

app.get("/service", (req, res) => {
    res.send({text: "Service page"})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})