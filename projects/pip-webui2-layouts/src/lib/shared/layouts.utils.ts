export function each(array, iteratee) {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

export function intersection(a, b) {
    let ai = 0, bi = 0;
    const result = [];

    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) { ai++; } else if (a[ai] > b[bi]) { bi++; } else /* they're equal */ {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }

    return result;
}

export function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) { func.apply(context, args); }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) { func.apply(context, args); }
    };
}
