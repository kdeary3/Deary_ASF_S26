"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimeter = exports.area = void 0;
const area = (length, width) => {
    return length * width;
};
exports.area = area;
const perimeter = (width, length) => {
    return width + width + length + length;
};
exports.perimeter = perimeter;
