import {} from 'jasmine';
import capivara from '../../src/index';
import { Common } from '../../src/common';

describe('test method isArray', () => {
    it('Should not be an array', () => {
        expect(capivara.isArray({})).toBe(false);
    });
    it('Shoulded be array', () => {
        expect(
            capivara.isArray([]) &&
            capivara.isArray([{name: 'My Array'}])
        ).toBeTruthy();
    });
});

describe('test method isObject', () => {
    it('Should not be an object', () => {
        expect(capivara.isObject(Number(10))).toBe(false);
    });
    it('Should be an object', () => {
        expect(
            capivara.isObject(new Date()) &&
            capivara.isObject({}) &&
            capivara.isObject(new Array())
        ).toBeTruthy();
    });
});

describe('test method isDate', () => {
    it('Should not be a Date', () => {
        expect(capivara.isDate(Array(10))).toBe(false);
    });
    it('Should be a Date', () => {
        expect(
            capivara.isObject(new Date())
        ).toBeTruthy();
    });
});

describe('test method isElement', () => {
    it('Should not be a Element', () => {
        expect(capivara.isElement(String(10))).toBe(false);
    });
    it('Should be a Element', () => {
        let div = document.createElement('div');
        expect(capivara.isElement(div)).toBeTruthy();
    });
});

describe('test method isElement', () => {
    it('Should not be a Element', () => {
        expect(capivara.isFunction(Number(20))).toBe(false);
    });
    it('Should be a Element', () => {
        expect(
            capivara.isFunction(function () {
            })
        ).toBeTruthy();
    });
});

describe('test method isNumber', () => {
    it('Should not be a Number', () => {
        expect(capivara.isNumber(String('this is a test'))).toBe(false);
    });
    it('Should be a Number', () => {
        expect(
            capivara.isNumber(10) &&
            capivara.isNumber(Number(20))
        ).toBeTruthy();
    });
});

describe('test method isString', () => {
    it('Should not be a String', () => {
        expect(capivara.isString(['This is an array'])).toBe(false);
    });
    it('Should be a String', () => {
        expect(
            capivara.isString('This is a test') &&
            capivara.isString(String('and this it is too'))
        ).toBeTruthy();
    });
});

describe('test method replaceAll', () => {
    it('Should not be a Replace', () => {
        expect(capivara.replaceAll('This awesome framework is awesome', 'awesome', 'wonderful')).not.toEqual('This awesome framework is wonderful')
    });
    it('Should be a Replace', () => {
        expect(
            capivara.replaceAll('This awesome framework is awesome', 'awesome', 'wonderful')).toEqual('This wonderful framework is wonderful')
    });
});
