const express = require('express')

const Gun = require('gun')

const app = express()

const port = process.env.PORT || 8080

app.use(Gun.serve)

const server = app.listen(port, (err) => {
    if (!err) console.log("Server is listening on port: ", port)
})

Gun({web: server})