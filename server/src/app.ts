import bodyParser = require('body-parser');
import cors = require('cors');
import express = require('express');
import mongoose = require('mongoose');
import post from './posts/posts.routes';
import logger from './util/logger';

const app = express();
const mongooseDB = 'mongodb://localhost:27017/blogDB';
const mongoDb = process.env.MONGODB_URI || mongooseDB;
mongoose.connect(mongoDb, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', logger.error.bind('DB Init failed'));

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/post', post);
export default app;
