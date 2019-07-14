const pipe = function (number) {
    let sum = number;
    for (let arg of arguments) {
        if (arg === number) {
            continue;
        }
        sum = arg(sum);
    }
    return sum;
};

function addOne(x) {
    return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
