const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db')
const app = express();
const Series = require('./models/seriesModel')

app.use(cors());

connectDB();

app.get('/api/youtube', (req, res) => {
    res.json({like: "Like the video", subscribe: "Subscribe to Jack Wenham for more videos"});
});

const port = 8000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});