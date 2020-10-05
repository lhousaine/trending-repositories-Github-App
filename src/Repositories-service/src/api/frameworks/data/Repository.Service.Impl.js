import RepositoryService from '../../application/adapters/Repository.Service';
import mapRepositoryResponse from '../common/Repository.Response.map';
import FetchTrendingRepository from './Fetch.Repositories';

export default class RepositoryServiceImpl extends RepositoryService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    getTrendingRepositoriesLanguages() {
        const resultLanguages = [];
        FetchTrendingRepository().forEach((element) => {
            if (!resultLanguages.include(element.language)) {
                resultLanguages.push(element.language);
            }
        });
        return resultLanguages;
    }

    getLanguageRepositoriesNumber(language) {
        return FetchTrendingRepository().filter((repo) => { return repo.language === language; }).length;
    }

    getLanguageRepositoriesList(language) {
        return FetchTrendingRepository().filter((repo) => { return repo.language === language; })
            .map((repo) => { return mapRepositoryResponse(repo); });
    }
}
