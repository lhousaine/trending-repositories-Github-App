const express = require('express');

const { default: repositoriesRouter } = require('./repositories');

const apiRouter = (repositoryService) => {
    const routes = express.Router();

    const repositoryRouter = repositoriesRouter(repositoryService);

    routes.use('/repositories', repositoryRouter);

    return routes;
};

export default apiRouter;
