exports.fizzbuzz = function({ fizz, buzz }) {
  if (fizz == 0 || buzz == 0) {
    throw new Error("Both divisors must be non-zero");
  }

  return function(num) {
    const shouldFizz = num % fizz == 0;
    const shouldBuzz = num % buzz == 0;

    let result = "";

    if (shouldFizz) {
      result += "Fizz";
    }

    if (shouldBuzz) {
      result += "Buzz";
    }

    if (!shouldFizz && !shouldBuzz) {
      result = String(num);
    }

    return result;
  };
};
