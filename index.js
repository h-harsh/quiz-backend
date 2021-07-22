const express = require('express')

const app = express();
const port = 7000

app.get('/',(req, res) => {
    res.send("Hello Quiz")
})

app.listen(port, () => {
    console.log("app is listening, bolo")
})