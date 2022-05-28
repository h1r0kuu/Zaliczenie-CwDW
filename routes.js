const route = require("express").Router()

route.get("/", (req, res) => {
    res.send({text: "Index page"})
})

route.get("/about", (req, res) => {
    res.send({text: "About us page"})
})

route.get("/service", (req, res) => {
    res.send({text: "Service page"})
})

module.exports = route