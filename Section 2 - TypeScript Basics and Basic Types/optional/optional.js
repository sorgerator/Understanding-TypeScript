"use strict";
function generateError(msg) {
    throw new Error(msg);
}
generateError();
let input = "";
const didProvideInput = input ?? false;
