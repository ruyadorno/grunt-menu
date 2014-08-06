'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.menu = {

  setUp: function (done) {
    // setup here if necessary
    done();
  },

  testGetChoices: function (test) {
    test.expect(1);

    var tasksData = require('./samples/tasks-data');
    var getChoices = require('../tasks/lib/get-choices');
    var getChoicesExpected = require('./expected/get-choices');

    var choices = getChoices(grunt, tasksData);

    // excludes run methods from the tests
    choices.arr.forEach(function (item) {
      item.run = '';
    });

    test.deepEqual(
      choices,
      getChoicesExpected,
      'Should be able to transform raw tasks info into required data'
    );

    test.done();
  }

};

