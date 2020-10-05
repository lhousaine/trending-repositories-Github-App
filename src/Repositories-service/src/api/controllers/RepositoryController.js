import getLanguageRepositoriesListUsecase from '../application/usecases/getLanguageRepositoriesList';
import getLanguageRepositoriesNumberUsecase from '../application/usecases/getLanguageRepositoriesNumber';
import getTrendingRepositoriesLanguagesUsecase from '../application/usecases/getTrendingRepositoriesLanguages';

export default function RepositoryController(repositoryService) {

    const getTrendingRepositoriesLanguages = (request, response, next) => {
        const trendingRepositoriesLanguages = getTrendingRepositoriesLanguagesUsecase(repositoryService);
        trendingRepositoriesLanguages.Execute().then((languages) => {
            response.status(200).json(languages);
        }, (error) => {
            next(error);
        });
    };

    const getLanguageRepositoriesNumber = (request, response, next) => {
        const { language } = request.params;
        const languageRepositoriesNumber = getLanguageRepositoriesNumberUsecase(repositoryService);
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
        const languageRepositoriesList = getLanguageRepositoriesListUsecase(repositoryService);
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
