const getMin = (a, b, c) => {
    const array = [a, b, c];
    let min = a;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

getMin(3, 0, -3);
