const { expect } = require('chai');
const {
    describe, it, before
} = require('mocha');
const Sinon = require('sinon');
const { default: getLanguageRepositoriesNumberUsecase } = require('../../../api/application/usecases/getLanguageRepositoriesNumber');
const { RepositoryService } = require('../../../api/config/dependencies');

describe('Language repositories Number', () => {
    let repositoryService;
    let languageRepositoriesNumber;
    before(() => {
        repositoryService = RepositoryService;
        languageRepositoriesNumber = getLanguageRepositoriesNumberUsecase(repositoryService);
    });

    it('should not return 1', (done) => {
        const stub = Sinon.stub(repositoryService, 'getLanguageRepositoriesNumber').returns(1);
        const reposNumber = languageRepositoriesNumber.Execute('Python');
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(reposNumber).to.equal(1);
        done();
    });

});
