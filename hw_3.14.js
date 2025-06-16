// Домашнее задание по основным типам [3.14]
let TEN = 10;
let ONE_HUNDRED = 100;
let ONE_THOUSAND = 1000;
let ONE_MILLION = 1000000;
let ONE_BILLION = 1000000000; //         1.000.000.000 (9)
let ONE_TRILLION = 1000000000000; //     1.000.000.000.000 (12)
let ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
let MAX = 9007199254740992; // 9.007.199.254.740.992 (15)
let LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
let TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];
/**
 * Проверка безопасного числа
 * @param num число от -9.007.199.254.740.992 до 9.007.199.254.740.992
 */
function isSafeNumber(num) {
    return num >= -MAX && num <= MAX;
}
/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */
function toWords(number) {
    let words;
    let num;
    if (typeof number === 'string') {
        num = parseInt(number, 10);
    }
    else {
        num = number;
    }
    if (!isFinite(num)) {
        throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
    }
    if (!isSafeNumber(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    words = generateWords(num);
    // return asOrdinal ? makeOrdinal(words) : words
    return words;
}
/**
 * Создание массива слов для переданного числа
 * @param num число
 * @param words уже добавленные слова (если есть)
 */
function generateWords(num, words) {
    let remainder = 0, word = '', resWords = words ? words : [];
    // We’re done
    if (num === 0) {
        return !resWords ? 'zero' : resWords.join(' ').replace(/,$/, '');
    }
    // If negative, prepend “minus”
    if (num < 0) {
        resWords.push('minus');
        num = Math.abs(num);
    }
    if (num < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[num];
    }
    else if (num < ONE_HUNDRED) {
        remainder = num % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(num / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }
    }
    else if (num < ONE_THOUSAND) {
        remainder = num % ONE_HUNDRED;
        word = generateWords(Math.floor(num / ONE_HUNDRED)) + ' hundred';
    }
    else if (num < ONE_MILLION) {
        remainder = num % ONE_THOUSAND;
        word = generateWords(Math.floor(num / ONE_THOUSAND)) + ' thousand,';
    }
    else if (num < ONE_BILLION) {
        remainder = num % ONE_MILLION;
        word = generateWords(Math.floor(num / ONE_MILLION)) + ' million,';
    }
    else if (num < ONE_TRILLION) {
        remainder = num % ONE_BILLION;
        word = generateWords(Math.floor(num / ONE_BILLION)) + ' billion,';
    }
    else if (num < ONE_QUADRILLION) {
        remainder = num % ONE_TRILLION;
        word = generateWords(Math.floor(num / ONE_TRILLION)) + ' trillion,';
    }
    else if (num <= MAX) {
        remainder = num % ONE_QUADRILLION;
        word = generateWords(Math.floor(num / ONE_QUADRILLION)) +
            ' quadrillion,';
    }
    resWords.push(word);
    return generateWords(remainder, resWords);
}
console.log(toWords(111111));
export {};
