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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    req.header(
        'Access-Control-Allow-Headers,Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Mthods', 'POST, PUT, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    return next();
});

app.use('/api', apiRouter(RepositoryService));
app.use('/api/*', NotFoundHandler);
app.use(ErrorHandler);

app.listen(port, () => {
    console.log('Example app listening at port : ', port);
});

export default app;
