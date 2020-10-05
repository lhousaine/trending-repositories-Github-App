const { expect } = require('chai');
const {
    describe, before, after, it
} = require('mocha');
const Sinon = require('sinon');
const { default: RepositoryService } = require('../../../api/application/adapters/Repository.Service');
const { default: getLanguageRepositoriesNumber } = require('../../../api/application/usecases/getLanguageRepositoriesNumber');

describe('Language repositories Number', () => {
    it('should not return zero', (done) => {
        const repositoryService = new RepositoryService();
        const languageRepositoriesNumber = getLanguageRepositoriesNumber(repositoryService);
        const stub = Sinon.stub(repositoryService, 'getLanguageRepositoriesNumber').returns(0);
        const reposNumber = languageRepositoriesNumber.Execute('Typescript');
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(reposNumber).to.equal(0);
        done();
    });
    it('should not return 1', (done) => {
        const repositoryService = new RepositoryService();
        const languageRepositoriesNumber = getLanguageRepositoriesNumber(repositoryService);
        const stub = Sinon.stub(repositoryService, 'getLanguageRepositoriesNumber').returns(1);
        const reposNumber = languageRepositoriesNumber.Execute('Python');
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(reposNumber).to.equal(1);
        done();
    });
});
