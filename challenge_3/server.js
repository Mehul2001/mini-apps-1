const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(express.static('public'))
app.post('/', function (req, res) {
    console.log(req);
    res.send('Got a POST request')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

