"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(val) {
    // return val.length;
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numOfWords = getLength("does this work?");
// numOfWords.length;
const numIntems = getLength(["Sports", "Cooking"]);
//# sourceMappingURL=functions.js.map