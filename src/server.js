const express = require("express")

const routes = require("./routes/routes")

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use("/api", routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server listening on port ${port}.`))