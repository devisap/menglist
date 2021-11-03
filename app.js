const express = require('express');
const app = express();
const path = require('path');
const router = require('./config/router');
const port = 3000;

// set up view engine
app.set('views', path.join(__dirname, './applications/views'));
app.set('view engine', 'ejs');
// end set up view engine

// set router
app.use(router);
// end set router

app.listen(port, () => {
    console.log(`running in ${port}`);
})

