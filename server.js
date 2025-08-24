const express = require('express');
const app = express();
const path = require('path');
const posts = require('./routes/posts');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');
const { default: notFound } = require('./middleware/notFound');
const port = process.env.PORT || 8000;

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// logger middleware
app.use(logger);


//Routes
app.use('/api/posts', posts);

app.use(notFound);

// Error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));