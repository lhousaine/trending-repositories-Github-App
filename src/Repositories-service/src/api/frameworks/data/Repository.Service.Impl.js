/* eslint-disable no-undef */
import RepositoryService from '../../application/adapters/Repository.Service';
import mapRepositoryResponse from '../common/Repository.Response.map';
import UpperFirst from '../common/Upper.First';
import FetchTrendingRepository from './Fetch.Repositories';

export default class RepositoryServiceImpl extends RepositoryService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    async getTrendingRepositoriesLanguages() {
        const trendingRepositories = await FetchTrendingRepository().Execute();
        const resultLanguages = [];
        trendingRepositories.forEach((element) => {
            if (element.language !== null && resultLanguages.indexOf(element.language) === -1) {
                resultLanguages.push(element.language);
            }
        });
        return resultLanguages;
    }

    async getLanguageRepositoriesNumber(language) {
        const trendingRepositories = await FetchTrendingRepository().Execute();
        const upperFirstLanguage = UpperFirst(language);
        return trendingRepositories.filter((repo) => {
            return repo.language === upperFirstLanguage;
        }).length;
    }

    async getLanguageRepositoriesList(language) {
        const trendingRepositories = await FetchTrendingRepository().Execute();
        const upperFirstLanguage = UpperFirst(language);
        return trendingRepositories.filter((repo) => {
            return repo.language === upperFirstLanguage;
        }).map((repo) => {
            return mapRepositoryResponse(repo);
        });
    }
}
