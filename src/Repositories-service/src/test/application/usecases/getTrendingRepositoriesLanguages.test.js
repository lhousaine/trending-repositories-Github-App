const { expect } = require('chai');
const {
    describe, it
} = require('mocha');
const Sinon = require('sinon');
const { default: getTrendingRepositoriesLanguagesUsecase } = require('../../../api/application/usecases/getTrendingRepositoriesLanguages');
const { RepositoryService } = require('../../../api/config/dependencies');
const mockLanguages = require('../../fixtures/languages.json');

describe('Trending repositories languages', () => {

    it('it should get all Trending repositories languages', (done) => {
        const repositoryService = RepositoryService;
        const trendingRepositoriesLangues = getTrendingRepositoriesLanguagesUsecase(repositoryService);
        const stub = Sinon.stub(repositoryService, 'getTrendingRepositoriesLanguages').returns(mockLanguages);
        const repos = trendingRepositoriesLangues.Execute();
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(mockLanguages.length).to.equal(repos.length);
        done();
    });
});
