const { expect } = require('chai');
const { describe, it } = require('mocha');
const { mock } = require('sinon');
const Sinon = require('sinon');
const { default: getLanguageRepositoriesListUsecase } = require('../../../api/application/usecases/getLanguageRepositoriesList');
const { RepositoryService } = require('../../../api/config/dependencies');
const mockRepos = require('../../fixtures/repositories.json');

describe('Trending repositories languages', () => {
    it('it should get all language Trending repositories', (done) => {
        const repositoryService = RepositoryService;
        const langueTrendingRepositories = getLanguageRepositoriesListUsecase(repositoryService);
        const stub = Sinon.stub(repositoryService, 'getLanguageRepositoriesList').returns(mockRepos);
        const languageRepos = langueTrendingRepositories.Execute('Python');
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(languageRepos.length).to.equal(mockRepos.length);
        done();
    });
});
