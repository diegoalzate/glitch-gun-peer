const express = require('express')

const Gun = require('gun')

const app = express()

const port = 8080 || process.env.PORT

app.use(Gun.serve)

const server = app.listen(port, (err) => {
    if (!err) console.log("Server is listening on port: ", port)
})

Gun({web: server})