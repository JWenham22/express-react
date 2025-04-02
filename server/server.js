const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db')
const app = express();
const Series = require('./models/seriesModel');
const Users = require('./models/usersModel');

app.use(cors());
app.use(express.json());

connectDB();

app.get('/api/youtube', (req, res) => {
    res.json({like: "Like the video", subscribe: "Subscribe to Jack Wenham for more videos"});
});

app.post('/api/series', async(req, res) => {
    // console.log(req.body)
    try {
        const series = await Series.create(req.body)

        res.status(200).json({
            success: true,
            series
        });
        
    } catch (error) {
        res.status(200).json({
            message: error.message
        });  
    }
});

app.get('/user', (req, res) => {
    res.json({user: 'Hello', login: 'yes'})
});

app.post('/users', async(req, res) => {
    // console.log(req.body)
    try {
        const users = await Users.create(req.body);

        res.status(200).json({
            success: true,
            users
        });
        
    } catch (error) {
        res.status(200).json({
            message: error.message
        }); 
    }
});

const port = 8000;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});