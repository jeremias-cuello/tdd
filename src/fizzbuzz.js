/**
 * Escribir una función que reciba un número entero y
 * retorne un string según las siguientes reglas:
 * - Si el número es divisible por 3, retornar "Fizz"
 * - Si el número es divisible por 5, retornar "Buzz"
 * - Si el número es divisible por 3 y 5, retornar "FizzBuzz"
 * - En cualquier otro caso, retornar el número convertido a string
 */

const fizzbuzz = (number) => {
    if(typeof number !== 'number') throw new Error('Number is required');
    if(Number.isNaN(number)) throw new Error('Number is required');

    if(number % 15 == 0) return "fizzbuzz";
    if(number % 3 == 0) return "fizz";
    if(number % 5 == 0) return "buzz";

    return number;
};

export { fizzbuzz };
