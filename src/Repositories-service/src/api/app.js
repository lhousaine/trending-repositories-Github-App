import { RepositoryService } from './config/dependencies';

const bodyParser = require('body-parser');
const express = require('express');

const { default: apiRouter } = require('./frameworks/web/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter(RepositoryService));

app.listen(port, () => {
    console.log('Example app listening at port : ', port);
});

export default app;
