// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzz
const fizzBuzz = require('../fizzBuzzer');

// unit tests for our `fizzBuzz` function
describe('fizzBuzz function', function() {

    // test the normal case
    it('should be a num', function() {
      // range of normal inputs, including
      const normalCases = [
        {a:30,   expected: 'fizz-buzz'},
        {a: 50,  expected: 'buzz'},
        {a: 9, expected: 'fizz'}
      ];
      // for each set of inputs (a), `fizzBuzz` should
      // produce the expected value
      normalCases.forEach(function(input) {
        const answer = fizzBuzz(input.a);
        expect(answer).to.equal(input.expected);
      });
    });

    it('should raise error if args not numbers', function() {
        // range of bad input is not a number
        const badInputs = [
          ['a'],
          ['1'],
          [false]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          expect(function() {
            adder(input[0]);
          }).to.throw(Error);
        });
      });
    });