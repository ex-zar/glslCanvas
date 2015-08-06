export function isCanvasVisible(canvas) {
    return	((canvas.getBoundingClientRect().top + canvas.height) > 0) &&
        (canvas.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight));
}

export function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}

export function nextHighestPowerOfTwo(x) {
    --x;
    for (let i = 1; i < 32; i <<= 1) {
        x = x | x >> i;
    }
    return x + 1;
}

export function fetchHTTP(url, methood) {
    let request = new XMLHttpRequest(),
        response;

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            response = request.responseText;
        }
    };
    request.open(methood ? methood : 'GET', url, false);
    request.overrideMimeType('text/plain');
    request.send();
    return response;
}

export function FormatNumberLength(num, length) {
    let r = num.toString();
    while (r.length < length) {
        r = '0' + r;
    }
    return r;
}

export function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

export function isDiff(a, b) {
    if (a && b) {
        return a.toString() !== b.toString();
    }
    return false;
}
