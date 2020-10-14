const express = require('express');
const { default: RepositoryController } = require('../../../controllers/RepositoryController');

export default function repositoriesRouter(repositoryService) {
    const router = express.Router();

    const controller = RepositoryController(repositoryService);

    router.route('/languages')
        .get(controller.getTrendingRepositoriesLanguages);

    router.route('/:language/number')
        .get(controller.getLanguageRepositoriesNumber);
    router.route('/:language/repos')
        .get(controller.getLanguageRepositoriesList);
    return router;
}
