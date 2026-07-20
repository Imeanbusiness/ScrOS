
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Save(Title, Value) {
    localStorage.setItem(SaveKey+Title, Value);
}

function Load(Title) {
    return localStorage.getItem(SaveKey+Title);
}

function updateAlert(alerttext) {
    if (!onealert) {
        alert(alerttext);
        onealert = true;
    }
}

function randint(i) {
    return Math.floor((Math.random()*i)+1);
}

function decimalAdjust(type, value, exp) {
    type = String(type);
    if (!["round", "floor", "ceil"].includes(type)) {
        throw new TypeError("The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.");
    }
    exp = Number(exp);
    value = Number(value);
    if (exp % 1 !== 0 || Number.isNaN(value)) {
        return NaN;
    } else if (exp === 0) {
        return Math[type](value);
    }
    const [magnitude, exponent = 0] = value.toString().split("e");
    const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
    const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
    return Number(`${newMagnitude}e${Number(newExponent) + exp}`);
}

function round10(value, exp) {
    return decimalAdjust("round", value, exp);
}

function parsePosition(value) {
    const parts = value.split(",").map(part => part.trim()).filter(part => part !== "");
    if (parts.length !== 2) {
        return null;
    }
    const [x, y] = parts;
    if (isNaN(x) || isNaN(y)) {
        return null;
    }
    return [x, y];
}
