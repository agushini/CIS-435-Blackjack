/*
Make sure to run on terminal:
    npm i express
    npm i cors
    npm i body-parser (optional)
    
    make sure to also do 
    npm i http-server -g (to install server globally)
otherwise these modules won't work!
*/
"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const portNum = 3000;

app.use(cors({origin: '*'}));

app.use(express.json());