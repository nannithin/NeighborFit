const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config(); 

const PORT = process.env.PORT;
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.use("/api/match", require("./routes/match"))

app.listen(5000, () => console.log("Server running on port 5000"))
