'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';


const app = express();


// App Setup
app.use(logger('dev'));

// Format Data as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({"hello": "container"});
});

app.use(helmet());
app.use(cors());
app.use(compression());

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);