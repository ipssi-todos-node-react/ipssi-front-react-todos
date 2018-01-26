const MOCKS_DATA = require("../mock/data").MOCKS_DATA;
const EMPTY_DATA = require("../mock/data").EMPTY_DATA;
const WRONG_DATA = require("../mock/data").WRONG_DATA;
const chai = require('chai');
const should = chai.should;
const expect = chai.expect;
const assert = chai.assert;
const checkProperties = require('../app/utilities/check').checkTodoProperties;


describe('Basic test true', () => {
    it('should pass when everythings ok', () => {
        expect(true).to.be.true;
    });
})

describe('String test', () => {
    it('should be true when text is a string', () => {
        const mocks = MOCKS_DATA[0].text;
        expect(mocks).to.be.a('string');
    });
})

describe('Wrong string test', () => {
    it('should be true when text is not a string', () => {
        const wrong = WRONG_DATA[0].text;
        expect(wrong).not.be.a('string');
    });
})

describe('Adding test', () => {
    it('should be true when it is an array', () => {
        expect(MOCKS_DATA).to.be.an("array").that.is.not.empty;
    });
})

describe('Removing test', () => {
    it('should be true when it is not an array', () => {
        expect(EMPTY_DATA).to.be.an("array").that.is.empty;
    });
})
