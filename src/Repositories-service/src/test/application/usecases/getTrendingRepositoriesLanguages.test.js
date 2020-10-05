const { expect } = require('chai');
const {
    describe, it
} = require('mocha');
const sinon = require('sinon');
const { default: RepositoryService } = require('../../../api/application/adapters/Repository.Service');
const { default: getTrendingRepositoriesLanguagesUsecase } = require('../../../api/application/usecases/getTrendingRepositoriesLanguages');

const mockLanguages = require('../../fixtures/languages.json');

describe('Trending repositories languages', () => {
    it('it should get all Trending repositories languages', (done) => {
        const repositoryService = new RepositoryService();
        const stub = sinon.stub(repositoryService, 'getTrendingRepositoriesLanguages').returns(mockLanguages);
        const trendingRepositoriesLangues = getTrendingRepositoriesLanguagesUsecase(repositoryService);

        const repos = trendingRepositoriesLangues.Execute();
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(mockLanguages.length).to.equal(repos.length);
        done();
    });
});
