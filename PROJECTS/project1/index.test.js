const isPalindrome = require("./index") ;

// TEST SUITE 1
describe("This test suite checks if isPalindrome works with simple strings.", () => {
    test("Not palindromes. Should return false.", () => {
        expect(isPalindrome("hello")).toBe(false);
        expect(isPalindrome("thisisnotapalindrome")).toBe(false);
    });
    test("Palindromes. Should return true", () => {
        expect(isPalindrome("bob")).toBe(true);
        expect(isPalindrome("racecar")).toBe(true);
    });
});

// TEST SUITE 2
describe("This test suite checks for case sensitivity, whitespaces and punctuation.", () => {
    test("should be whitespace irrespective", () => {
        expect(isPalindrome(" taco cat             ")).toBe(true);
    });
    test("should handle special characters", () => {
        expect(isPalindrome("tacocat!@#$%^&*(){}|:<>?'~`tacocat")).toBe(true);
    });
    test("should handle full sentences with mixed casing", () => {
        expect(isPalindrome("aBlE WaS i ERe I saW ELbA")).toBe(true);
    });
    test("should strip punctuation like commas and dashes", () => {
        expect(isPalindrome("A man, a plan, a canal – Panama!")).toBe(true);
    });
    test("should strip punctuation like commas and dashes", () => {
        expect(isPalindrome("tacocat&tacocat")).toBe(true);
    });
    test("should handle a combination of all cases", () => {
        const comboFalse = "  No 'x' in, 'A-m-a-z-o-n'???  ";
        expect(isPalindrome(comboFalse)).toBe(false);

        const comboTrue = " .Race-caR.";
        expect(isPalindrome(comboTrue)).toBe(true);
    });
    test("'Dammit I’m mad.\n" +
        "Evil is a deed as I live.\n" +
        "God, am I reviled? I rise, my bed on a sun, I melt.\n" +
        "To be not one man emanation is or nary is.\n" +
        "Norated, a moon, a star, a rain, a log, a can, " +
        "a jet, a pan, a cap, a bean, a tom, a tap, a bat, " +
        "a rice, a lisp, a taper, a rot, a grate, a barrow, " +
        "a ban, a tug, a tap, a rat, a rane, a lop, a step, " +
        "a puss, a step, a stop, a tap, a bay, a mart, a ray, " +
        "a lyre, a note, a nod, a pat, a ton, a semi, a boat, " +
        "a canoe, a bow, a brad, a gale, a lilt, a marg, a trap, " +
        "a spit, a spot, a spur, a pulsate, a pusa, a puss, " +
        "a step, a horse, a puss, a step, a pusa, a pulsate, " +
        "a spur, a spot, a spit, a trap, a marg, a lilt, a gale, " +
        "a brad, a bow, a canoe, a boat, a semi, a ton, a pat, " +
        "a nod, a note, a lyre, a ray, a mart, a bay, a tap, " +
        "a stop, a step, a puss, a step, a lop, a rane, a rat, " +
        "a tap, a tug, a ban, a barrow, a grate, a rot, a taper, " +
        "a lisp, a rice, a bat, a tap, a tom, a bean, a cap, " +
        "a pan, a jet, a canal, a pagoda, a rain, a star, a moon, " +
        "a detar on.\n" +
        "If any is rory, an is no itaname.\n" +
        "Man, eno tone bot.\n" +
        "Leminus, a node by me.\n" +
        "Sir, I deliver I am dog.\n" +
        "Evil is a deed as I live.\n" +
        "Dammit I’m mad.'. " +
        "Empty string. Should return false.", () => {
        expect(isPalindrome("hello")).toBe(false);
    });
});

// TEST SUITE 3
describe("This test suite checks for non-string inputs (numbers, arrays, booleans, objects, null, or undefined)", () => {
    test("Should handle empty string", () => {
        expect(isPalindrome("")).toBe(true);
    });
    test("Should return false for a number", () => {
        const number = 121
        const decimal = 23.22
        expect(isPalindrome(number)).toBe(false);
        expect(isPalindrome(decimal)).toBe(false);
    });
    test("Should return false for null or undefined", () => {
        const null_input = null
        const undefined_input = undefined
        expect(isPalindrome(null_input)).toBe(false);
        expect(isPalindrome(undefined_input)).toBe(false);
    });
    test("Should return false for arrays or objects", () => {
        const array = ["racecar"]
        const object = { car: "tesla" }
        expect(isPalindrome(array)).toBe(false);
        expect(isPalindrome(object)).toBe(false);
    });

    test("Should return false for booleans", () => {
        const boolean = true;
        expect(isPalindrome(boolean)).toBe(false);
    });
});