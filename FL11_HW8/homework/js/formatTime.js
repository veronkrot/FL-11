const formatTime = number => {
    const hour = 60;
    const day = 1440;
    const formatString = (d, h, m) => {
        return `${d} day(s) ${h} hour(s) ${m} minute(s).`;
    };

    if (number < hour) {
        return formatString(0, 0, number);
    }
    if (number >= hour && number < day) {
        let min = number % hour;
        let hours = (number - min) / hour;
        return formatString(0, hours, min);
    } else {
        let dayMinutes = (number - (number % day));
        let days = dayMinutes / day;
        let hoursMinutes = number - dayMinutes;
        let hours = (hoursMinutes - (hoursMinutes % hour)) / hour;
        let min = number - (days * day + hours * hour);
        return formatString(days, hours, min);
    }
};

formatTime(120);
formatTime(59);
formatTime(3601);
