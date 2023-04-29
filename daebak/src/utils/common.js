function isDateInMonth(year, month, target) {
    const pattern = new RegExp(`^${year}-0?${month}-\\d{2}$`);
    return pattern.test(target);
}

function getDayOffsetOfMonth(year, month) {
    const target = new Date(year, month - 1);
    return target.getDay();
}

function formatISODate(txtDate) {
    const date = new Date(txtDate.slice(0, 13));
    return date.toISOString().slice(0, 10);
}

function formatISODateForChartLabel(year, month, index) {
    const date = new Date(year, month - 1, index + 2);
    return date.toISOString().slice(0, 10);
}

function $compareMonth(date, target) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const pattern = new RegExp(`^${year}-0?${month}-\\d{2}$`);
    return pattern.test(target);
}

function $getTotalValue(values) {
    return values.reduce((acc, curr) => acc + (curr || 0), 0);
}

function $sortByLatest(items) {
    const getDate = (date) => +date.split("-").at(-1);
    return items.sort((a, b) => getDate(b.date) - getDate(a.date));
}

export {
    isDateInMonth,
    getDayOffsetOfMonth,
    formatISODate,
    formatISODateForChartLabel,
    $compareMonth,
    $getTotalValue,
    $sortByLatest,
};
