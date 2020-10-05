export default function RepositoryController(repositoryService) {

    const getTrendingRepositoriesLanguages = (request, response, next) => {
        const trendingRepositoriesLanguages = getTrendingRepositoriesLanguages(repositoryService);
        trendingRepositoriesLanguages.Execute().then((languages) => {
            response.status(200).json(languages);
        }, (error) => {
            next(error);
        });
    };

    const getLanguageRepositoriesNumber = (request, response, next) => {
        const { language } = request.params;
        const languageRepositoriesNumber = getLanguageRepositoriesNumber(repositoryService);
        languageRepositoriesNumber.Execute(language).then((repositoriesNumber) => {
            response.status(200).json({
                repositoriesNumber
            });
        }, (error) => {
            next(error);
        });
    };

    const getLanguageRepositoriesList = (request, response, next) => {
        const { language } = request.params;
        const languageRepositoriesList = getLanguageRepositoriesList(repositoryService);
        languageRepositoriesList.Execute(language).then((languageRepositories) => {
            response.status(200).json(languageRepositories);
        }, (error) => {
            next(error);
        });
    };

    return {
        getTrendingRepositoriesLanguages,
        getLanguageRepositoriesNumber,
        getLanguageRepositoriesList
    };
}
