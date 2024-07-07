import { expect } from 'chai';
import { MathOperations } from '../src/mathOperations';
import { describe } from 'mocha';

describe('Positive tests using chai', function () {
  it('Positive pow', function () {
    const pow = MathOperations.power(1, 2);
    expect(pow, 'pow is not equalt to 1').to.equal(1);
  });

  it('Positive sqrt', function () {
    const sqrt = MathOperations.sqrt(16);
    expect(sqrt, 'sqrt is not equalt to 4').to.equal(4);
  });

  it('Positive even', function () {
    const even = MathOperations.isEven(-4);
    expect(even, 'number is not even').to.be.true;
  });

  it('Positive odd', function () {
    const odd = MathOperations.isOdd(-11);
    expect(odd, 'number is not odd').to.be.true;
  });

  it('Positive abs', function () {
    const abs = MathOperations.abs(-11);
    expect(abs, 'abs is incorrect').to.equal(11);
  });

  it('Positive gcd', function () {
    const gcd = MathOperations.gcd(10, 5);
    expect(gcd, 'gcd is incorrect').to.equal(5);
  });

  it('Positive lcm', function () {
    const lcm = MathOperations.lcm(10, 6);
    expect(lcm, 'lcm is incorrect').to.equal(30);
  });

  it('Positive lcm2', function () {
    const lcm = MathOperations.lcm(10, 5);
    expect(lcm, 'lcm is incorrect').to.equal(10);
  });

  it('Positive max', function () {
    const max = MathOperations.max([10, 6, 100, 13, 25]);
    expect(max, 'max is incorrect').to.equal(100);
  });

  it('Positive max2', function () {
    const max = MathOperations.max([10, 6, 100, 13, 255]);
    expect(max, 'max is incorrect').to.equal(255);
  });

  it('Positive min', function () {
    const min = MathOperations.min([10, 6, 100, 13, 25]);
    expect(min, 'min is incorrect').to.equal(6);
  });

  it('Positive average', function () {
    const average = MathOperations.average([10, 6, 100, 13, 25]);
    expect(average, 'average is incorrect').to.equal(30.8);
  });

  it('Positive isPrime', function () {
    const prime = MathOperations.isPrime(3);
    expect(prime, 'number is not prime').to.be.true;
  });

  it('Positive sumOfDigits', function () {
    const sumOfDigits = MathOperations.sumOfDigits(133);
    expect(sumOfDigits, 'sum is incorrect').to.equal(7);
  });

  it('Positive reverseNumber', function () {
    const reverseNumber = MathOperations.reverseNumber(133);
    expect(reverseNumber, 'reverse is incorrect').to.equal(331);
  });
});

//-------------------------- Negative tests------------------------//

describe('Negative tests using chai', function () {
  it('Negative pow', function () {
    const pow = MathOperations.power(2, 3);
    expect(pow, 'pow is equal to 33').to.not.equal(33);
  });

  it('Negative sqrt - throw error', function () {
    expect(() => MathOperations.sqrt(-5)).to.throw(
      'Square root of negative number'
    );
  });

  it('Negative even', function () {
    const even = MathOperations.isEven(21);
    expect(even, 'number is even').to.be.false;
  });

  it('Negative odd', function () {
    const odd = MathOperations.isOdd(-4);
    expect(odd, 'argument is even').to.be.false;
  });

  it('Negative abs', function () {
    const abs = MathOperations.abs(-11);
    expect(abs, 'abs is incorrect').to.not.equal(-11);
  });

  it('Negative gcd', function () {
    const gcd = MathOperations.gcd(24, -18);
    expect(gcd, 'gcd is incorrect').to.not.equal(11);
  });

  it('Negative lcm', function () {
    const lcm = MathOperations.gcd(7, 3);
    expect(lcm, 'lcm is incorrect').to.not.equal(11);
  });

   it('Negative lcm2', function () {
     const lcm = MathOperations.gcd(7, 3);
     expect(lcm, 'lcm is incorrect').to.not.equal(113);
   });

  it('Negative max', function () {
    expect(() => MathOperations.max([])).to.throw('Array is empty');
  });

  it('Negative min', function () {
    expect(() => MathOperations.min([])).to.throw('Array is empty');
  });

  it('Negative average', function () {
    expect(() => MathOperations.average([])).to.throw('Array is empty');
  });

  it('Negative sumOfDigets', function () {
    const sumOfDigets = MathOperations.sumOfDigits(-10);
    expect(sumOfDigets, 'sumOfDigets is incorrect').to.not.equal(2);
  });

  it('Negative sumOfDigets2', function () {
    const sumOfDigets = MathOperations.sumOfDigits(-10);
    expect(sumOfDigets, 'sumOfDigets is incorrect').to.not.equal(23);
  });

  it('Negative reverseNumber', function () {
    const reverseNumber = MathOperations.reverseNumber(123);
    expect(reverseNumber, 'reverseNumber is incorrect').to.not.equal(222);
  });

  it('Negative reverseNumber2', function () {
    const reverseNumber = MathOperations.reverseNumber(123);
    expect(reverseNumber, 'reverseNumber is incorrect').to.not.equal(312);
  });


});
