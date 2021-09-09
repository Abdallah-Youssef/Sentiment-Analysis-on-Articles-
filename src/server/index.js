const dotenv = require('dotenv');
dotenv.config();
const {API_KEY, ANALYSIS_API_URL} = process.env

const express = require('express');
const { default: axios } = require("axios");
const cors = require('cors');
const path = require('path');
const mockAPIResponse = {
    title: 'test json response',
    message: 'this is a message',
    time: 'now'
}

const PORT = 8081


const app = express()
app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json())
app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/analyse', async function (req, res) {
    const { body: { url } } = req;
    const apiUrl = `${ANALYSIS_API_URL}?key=${API_KEY}&url=${url}&lang=en`
    const response = await axios.post(apiUrl);
    const result = response.data;
    res.send(result);
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = {
    app,
    mockAPIResponse
}