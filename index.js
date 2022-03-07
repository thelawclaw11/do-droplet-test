const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.json({message: "This is coming from a droplet"})
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`server listening on port ${port}`))