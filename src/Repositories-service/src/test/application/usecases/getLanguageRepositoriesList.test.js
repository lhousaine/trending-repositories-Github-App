const { expect } = require('chai');
const { describe, it } = require('mocha');
const { mock } = require('sinon');
const sinon = require('sinon');
const { default: RepositoryService } = require('../../../api/application/adapters/Repository.Service');
const { default: getLanguageRepositoriesListUsecase } = require('../../../api/application/usecases/getLanguageRepositoriesList');
const mockRepos = require('../../fixtures/repositories.json');

describe('language Trending repositories', () => {
    it('it should get all language Trending repositories', (done) => {
        const repositoryService = new RepositoryService();
        const langueTrendingRepositories = getLanguageRepositoriesListUsecase(repositoryService);
        const stub = sinon.stub(repositoryService, 'getLanguageRepositoriesList').returns(mockRepos);
        const languageRepos = langueTrendingRepositories.Execute('Python');
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(languageRepos.length).to.equal(mockRepos.length);
        done();
    });
});
