function isPalindrome(string) {

    if (typeof string != 'string') return false

    const clean = string
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // This replaces things like accent marks from other languages.
        .replace(/[^a-z0-9]/g, "");
    const reverse = clean.split("").reverse().join("");

    // Checking cases
    if (clean.length === 0 && string.length > 0) return true;
    return clean === reverse;
}

module.exports = isPalindrome;