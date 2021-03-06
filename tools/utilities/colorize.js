'use strict';

const colorMap = {
    blue: 34,
    cyan: 36,
    green: 32,
    magenta: 35,
    red: 31,
    reset: 0,
    yellow: 33
};

const colorize = (text, color) => {
    color = color in colorMap ? colorMap[color] : colorMap.reset;

    return `\x1b[${ color }m${ text }\x1b[0m`;
};

module.exports = {
    colorize
};
