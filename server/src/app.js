const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(mainRouter);

app.use((req, res, next) =>{
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Credentials', 'true');
    res.header(
        'Acces-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PT, DELETE');
})

module.exports = app;