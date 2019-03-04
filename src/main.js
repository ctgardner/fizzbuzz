const { fizzbuzz } = require("./fizzbuzz");

const fn = fizzbuzz({ fizz: 3, buzz: 5 });

for (let i = 1; i <= 100; ++i) {
  console.log(fn(i));
}
