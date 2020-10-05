import { RepositoryService } from './config/dependencies';
import ErrorHandler from './frameworks/common/Error.Handler';
import NotFoundHandler from './frameworks/common/NotFound.Handler';

const bodyParser = require('body-parser');
const express = require('express');

const { default: apiRouter } = require('./frameworks/web/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter(RepositoryService));
app.use('/api/*', NotFoundHandler);
app.use(ErrorHandler);

app.listen(port, () => {
    console.log('Example app listening at port : ', port);
});

export default app;
