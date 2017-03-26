'use strict';
var util = require('util');
var logger = require('../lib/logger');

var calculator = require('../lib/calculator');

describe('calculator', function() {

    it('should add numbers', function (done) {
        expect(calculator.add(2, 2)).toEqual(4);
        done();
    })
});
