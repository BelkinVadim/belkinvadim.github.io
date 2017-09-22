'use strict';

const noteDate = (date) => {
    if (typeof date !== 'number') {
        return date;
    }

    const nowDate = new Date();
    const updateDate = new Date(date);

    const nowDateDay = nowDate.getDate();
    const nowDateMonth = nowDate.getMonth();
    const nowDateYear = nowDate.getFullYear();
    const updateDateDay = updateDate.getDate();
    const updateDateMonth = updateDate.getMonth();
    const updateDateYear = updateDate.getFullYear();

    if (nowDateDay === updateDateDay && nowDateMonth === updateDateMonth && nowDateYear === updateDateYear) {
        date = ` ${updateDate.toLocaleTimeString('ru', {
            hour: 'numeric',
            minute: 'numeric'
        })}`;
    }
    else {
        date = ` ${updateDate.toLocaleDateString('ru', {
            day: 'numeric',
            month: 'short'
        })}`;
    }

    if (nowDateYear !== updateDateYear) {
        date += ` ${updateDate.toLocaleDateString('ru', {
            year: 'numeric'
        })}`;
    }

    return date;
};