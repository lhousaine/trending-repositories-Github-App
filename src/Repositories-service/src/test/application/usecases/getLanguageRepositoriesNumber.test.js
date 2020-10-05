const { expect } = require('chai');
const {
    describe, it, before
} = require('mocha');
const sinon = require('sinon');
const { default: RepositoryService } = require('../../../api/application/adapters/Repository.Service');
const { default: getLanguageRepositoriesNumberUsecase } = require('../../../api/application/usecases/getLanguageRepositoriesNumber');

describe('Language repositories Number', () => {

    it('should not return 1', (done) => {
        const repositoryService = new RepositoryService();
        const stub = sinon.stub(repositoryService, 'getLanguageRepositoriesNumber').returns(1);
        const languageRepositoriesNumber = getLanguageRepositoriesNumberUsecase(repositoryService);
        const reposNumber = languageRepositoriesNumber.Execute('Python');
        // eslint-disable-next-line no-unused-expressions
        expect(stub.calledOnce).to.be.true;
        expect(reposNumber).to.equal(1);
        done();
    });

});
