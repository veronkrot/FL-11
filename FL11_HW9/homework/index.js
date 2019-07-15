const getNumbers = (str) => {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        const num = Number(str[i]);
        if (!Number.isNaN(num)) {
            array.push(num);
        }
    }
    return array;
};

const findTypes = function () {
    const obj = {};

    for (let i = 0; i < arguments.length; i++) {
        const value = arguments[i];
        const type = typeof value;
        if (type in obj) {
            obj[type]++;
        } else {
            obj[type] = 1;
        }
    }
    return obj;
};

const executeforEach = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
};

const mapArray = (array, func) => {
    const newArray = [];
    executeforEach(array, function (el) {
        newArray.push(func(el));
    });
    return newArray;
};

const filterArray = (array, func) => {
    const newArray = [];
    executeforEach(array, function (el) {
        if (func(el)) {
            newArray.push(el);
        }
    });
    return newArray;
};

const showFormattedDate = (date) => {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', {month: 'short'});
    return `Date: ${month} ${day} ${year}`
};

const canConvertToDate = (dateStr) => {
    const date = Date.parse(dateStr);
    return !isNaN(date);
};

const daysBetween = (date1, date2) => {
    return Math.round((date2.getTime() - date1.getTime()) / ('1000' * '60' * '60' * '24'));
};

const getAmountOfAdultPeople = (data) => {
    return filterArray(data, function (el) {
        const birthday = new Date(el.birthday);
        const today = new Date();
        const eighteenYearsOld = '18' * '365';
        return daysBetween(birthday, today) >= eighteenYearsOld;
    }).length;
};

const keys = (obj) => {
    const array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push(key);
        }
    }
    return array;
};

const values = (obj) => {
    const array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push(obj[key]);
        }
    }
    return array;
};
