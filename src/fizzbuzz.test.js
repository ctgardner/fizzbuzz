const { fizzbuzz } = require("./fizzbuzz");

describe("when a divisor is zero", () => {
  it("throws an error", () => {
    expect(() => fizzbuzz({ fizz: 0, buzz: 5 })).toThrowError();
    expect(() => fizzbuzz({ fizz: 3, buzz: 0 })).toThrowError();
  });
});

describe("when both divisors are greater than zero", () => {
  const fizz = 3;
  const buzz = 5;

  const fn = fizzbuzz({ fizz, buzz });

  it('returns "Fizz" when passed multiples of the fizz-divisor only', () => {
    expect(fn(3)).toEqual("Fizz");
    expect(fn(6)).toEqual("Fizz");
    expect(fn(-6)).toEqual("Fizz");
  });

  it('returns "Buzz" when passed multiples of the buzz-divisor only', () => {
    expect(fn(5)).toEqual("Buzz");
    expect(fn(10)).toEqual("Buzz");
    expect(fn(-10)).toEqual("Buzz");
  });

  it('returns "FizzBuzz" when passed multiples of the fizz- and buzz-divisors', () => {
    expect(fn(15)).toEqual("FizzBuzz");
    expect(fn(-15)).toEqual("FizzBuzz");
    expect(fn(0)).toEqual("FizzBuzz");
  });

  it("returns the input as a string when passed neither a multiple of the fizz- nor buzz-divisor", () => {
    expect(fn(7)).toEqual("7");
    expect(fn(8)).toEqual("8");
    expect(fn(-8)).toEqual("-8");
  });
});

describe("when at least one divisor is less than zero", () => {
  test("fizz-divisor is less than zero", () => {
    const fn = fizzbuzz({ fizz: -3, buzz: 5 });

    expect(fn(6)).toEqual("Fizz");
    expect(fn(10)).toEqual("Buzz");
    expect(fn(15)).toEqual("FizzBuzz");
    expect(fn(7)).toEqual("7");
  });

  test("buzz-divisor is less than zero", () => {
    const fn = fizzbuzz({ fizz: 3, buzz: -5 });

    expect(fn(6)).toEqual("Fizz");
    expect(fn(10)).toEqual("Buzz");
    expect(fn(15)).toEqual("FizzBuzz");
    expect(fn(7)).toEqual("7");
  });

  test("both divisors are less than zero", () => {
    const fn = fizzbuzz({ fizz: -3, buzz: -5 });

    expect(fn(6)).toEqual("Fizz");
    expect(fn(10)).toEqual("Buzz");
    expect(fn(15)).toEqual("FizzBuzz");
    expect(fn(7)).toEqual("7");
  });
});
