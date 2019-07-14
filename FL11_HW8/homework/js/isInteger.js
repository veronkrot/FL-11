const isInteger = (num) => {
    const number = parseInt(num);
    return num === number;
};

isInteger(5);
isInteger(5.1);
