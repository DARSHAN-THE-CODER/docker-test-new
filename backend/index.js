const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')

// APP
const app = express()
app.use(bodyParser.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

dotenv.config();

app.get('/api', (req, res) => {
    res.json({ message: 'SERVER IS WORKING !' })
})

app.use(cors())
// Routes
// app.use('/', unAuthRouter)
// console.log(port)
// ENV Configs
const port  = process.env.PORT || 5000

const routes = require("./src/routes")

app.use('/api',routes)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
