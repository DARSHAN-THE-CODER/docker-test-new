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
const Prometheus = require('prom-client')

const metricsInterval = Prometheus.collectDefaultMetrics()
const checkoutsTotal = new Prometheus.Counter({
  name: 'checkouts_total',
  help: 'Total number of checkouts',
  labelNames: ['payment_method']
})
const httpRequestDurationMicroseconds = new Prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]  // buckets for response time from 0.1ms to 500ms
})


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

app.get('/metrics',(req, res) => {
    res.set('Content-Type', Prometheus.register.contentType)
    return res.send(Prometheus.register.metrics())
})

app.use('/api',routes)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
