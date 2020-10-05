import RepositoryService from '../../application/adapters/Repository.Service';
import mapRepositoryResponse from '../common/Repository.Response.map';
import UpperFirst from '../common/Upper.First';
import FetchTrendingRepository from './Fetch.Repositories';

export default class RepositoryServiceImpl extends RepositoryService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.fetchTrendingRepository = FetchTrendingRepository();
    }

    getTrendingRepositoriesLanguages() {
        const resultLanguages = [];
        this.fetchTrendingRepository.Execute().forEach((element) => {
            if (!resultLanguages.include(element.language)) {
                resultLanguages.push(element.language);
            }
        });
        return resultLanguages;
    }

    getLanguageRepositoriesNumber(language) {
        const upperFirstLanguage = UpperFirst(language);
        return this.fetchTrendingRepository.Execute()
            .filter((repo) => {
                return repo.language === upperFirstLanguage;
            }).length;
    }

    getLanguageRepositoriesList(language) {
        const upperFirstLanguage = UpperFirst(language);
        return this.fetchTrendingRepository.Execute()
            .filter((repo) => { return repo.language === upperFirstLanguage; })
            .map((repo) => {
                return mapRepositoryResponse(repo);
            });
    }
}
