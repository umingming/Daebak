function isDateInMonth(year, month, target) {
    const pattern = new RegExp(`^${year}-0?${month}-\\d{2}$`);
    return pattern.test(target);
}

function getDayOffsetOfMonth(year, month) {
    const target = new Date(year, month - 1);
    return target.getDay() - 1;
}

function formatISODate(year, month, date) {
    const target = new Date(year, month - 1, date + 2);
    return target.toISOString().slice(0, 10);
}

export { isDateInMonth, getDayOffsetOfMonth, formatISODate };
