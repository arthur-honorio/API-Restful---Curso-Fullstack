const express = require("express")

const routes = require("./routes/routes")
const db = require("./database/db")

const app = express()

db.connect()

app.use(express.urlencoded({ extended: true }))

app.use("/api", routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server listening on port ${port}.`))