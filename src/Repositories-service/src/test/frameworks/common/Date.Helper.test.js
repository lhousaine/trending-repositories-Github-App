const { expect } = require('chai');
const { describe, it } = require('mocha');
const { default: PriorDateHelper } = require('../../../api/frameworks/common/Date.Helper');

describe('Trending repositories languages', () => {

    const daysNumber = 30;

    it('It should return a prior date', (done) => {
        const priorDate = PriorDateHelper(daysNumber);
        console.log(priorDate);
        expect(PriorDateHelper(daysNumber)).to.equal('2020-09-05');
        done();
    });
});
