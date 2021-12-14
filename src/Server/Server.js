const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config({ path: './config.env' })
app.use(require('./Router/Auth'))
require('./Data/Conn')

// app.get('/', async (req, res) => {
//     res.send("welcome app js")
// })

app.listen(8000, () => {
    console.log("server is listeninng");
})
