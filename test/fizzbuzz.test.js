import { describe, it, expect } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe('fizzbuzz', () => {
    // Redundante
    // it('should be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function');
    // });

    it('should throw if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow();
    });

    it('should throw a specific error mesaage if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow("Number is required");
    });

    it('should throw a specific error mesaage if not number is provided as parameter', () => {
        expect(() => fizzbuzz(NaN)).toThrow("Number is required");
    });

    it('should returned 1 is number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1);
    });

    it('should returned 2 is number provided is 2', () => {
        expect(fizzbuzz(2)).toBe(2);
    });

    it('should returned "fizz" is number provided is 3', () => {
        expect(fizzbuzz(3)).toBe("fizz");
    });

    it('should returned "fizz" is number provided is multiple of 3', () => {
        expect(fizzbuzz(3)).toBe("fizz");
        expect(fizzbuzz(6)).toBe("fizz");
        expect(fizzbuzz(9)).toBe("fizz");
    });

    // Redundante
    // it('should returned 4 is number provided is 4', () => {
    //     expect(fizzbuzz(4)).toBe(4);
    // });

    it('should returned "buzz" is number provided is 5', () => {
        expect(fizzbuzz(5)).toBe("buzz");
    });

    it('should returned "buzz" is number provided is multiple of 5', () => {
        expect(fizzbuzz(10)).toBe("buzz");
        expect(fizzbuzz(20)).toBe("buzz");
    });

    it('should returned "fizzbuzz" is number provided is multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe("fizzbuzz");
        expect(fizzbuzz(30)).toBe("fizzbuzz");
    });
});
