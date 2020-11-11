require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const {verify} = require('./middleware')
const {login, refresh} = require('./authentication')
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(cookieParser())



app.post('/login', login)
app.post('/refresh', refresh)
app.use('/', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));


const port = process.env.NODE_ENV === 'production' ? 80 : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});