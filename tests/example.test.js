const assert = require('assert');
var UTIL = require('../util');

const T1 = "Mamy 188 nowych i potwierdzonych przypadków zakażenia #koronawirus z województw: śląskiego (113), mazowieckiego (37), dolnośląskiego (16), podlaskiego (7), łódzkiego (6), opolskiego (4), małopolskiego (2), świętokrzyskiego (1), kujawsko-pomorskiego (1) i pomorskiego (1).;"
const T2 = "Mamy 301 nowych i potwierdzonych przypadków zakażenia #koronawirus z województw: śląskiego (182), wielkopolskiego (84), dolnośląskiego (10), opolskiego (8), podlaskiego (6), pomorskiego (4), świętokrzyskiego (2), małopolskiego (2), lubelskiego (2) i zachodniopomorskiego (1).";

describe('Simple Math Test', () => {

    it('should return 16 - woj. dolnośląskie:T1', () => {
            assert.equal(  UTIL.getJSON(T1)['0'] , 16);
        });

    it('should return 2 - woj. lubelskie:T2', () => {
        assert.equal(  UTIL.getJSON(T2)['2'] , 2);
    });

    it('should return 113 - woj. śląskie:T1', () => {
        assert.equal(  UTIL.getJSON(T1)['11'] , 113);
    });

    it('should return 1 - woj. zachodniopomorskie:T1', () => {
        assert.equal(  UTIL.getJSON(T2)['15'] , 1);
    });
});