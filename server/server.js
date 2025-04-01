const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.get('/api/youtube', (req, res) => {
    res.json({like: "Like the video", subscribe: "Subscribe to Jack Wenham for more videos"})
});

app.get('/home', (req, res) => {
    res.json({soccer: "I want to play professional soccer!", surfing: "I want the weather to be nice so that I can surf"})
});

app.get('/soccer', (req, res) => {
    res.json({ManCity: "I love manchester city", united: "I hate United"})
})

const port = 8000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
});