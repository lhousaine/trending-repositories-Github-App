const { expect } = require('chai');
const { describe, it } = require('mocha');
const { default: UpperFirst } = require('../../../api/frameworks/common/Upper.First');

describe('Trending repositories languages', () => {

    const myword = 'JaVa';

    it('it should get all language Trending repositories', (done) => {
        const UpperFirstWord = UpperFirst(myword);
        expect(UpperFirstWord).to.equal('Java');
        done();
    });
});
