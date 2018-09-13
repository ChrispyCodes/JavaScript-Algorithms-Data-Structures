//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 & 5 => FizzBuzz
//not divisible by 3 or 5 => input
//not a number => 'not a number'

function fizzbuzz(i) {
    if (typeof i !== "number") return NaN;
    if (i % 3 === 0 && i % 5 === 0) return "FizzBuzz!!";
    if (i % 3 === 0) return "Fizz";
    if (i % 5 === 0) return "Buzz";
    return i;
}
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(30));

