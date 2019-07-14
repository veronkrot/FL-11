const reverseNumber = (number) => {
    let digit, result = 0;
    while (number) {
        digit = number % 10;
        result = (result * 10) + digit;
        number = number / 10 | 0;
    }
    return result;
};

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
