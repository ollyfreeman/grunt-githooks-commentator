var doubled = require('../src/doubled');

exports['calculate'] = function (test) {
    // Test standard functionality
    test.equal(doubled.calculate(2), 4);
    test.equal(doubled.calculate(5), 10);

    // Test that an error is thrown if an invalid input is given
    test.throws(function () { doubled.calculate(); });
    test.throws(function () { doubled.calculate(null); });
    test.throws(function () { doubled.calculate(true); });
    test.throws(function () { doubled.calculate([]); });
    test.throws(function () { doubled.calculate({}); });
    test.throws(function () { doubled.calculate('asdf'); });
    test.throws(function () { doubled.calculate('123'); });

    // Need to explicity say when the tests are done for async situations
    // - otherwise the test may end before some callbacks have fired
    test.done();
};
