"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let validKey;
validKey = "name";
validKey = "age";
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error("Accessing undefind or null value.");
    }
    return val;
}
const data = { id: 1, isStored: false, value: [1, -5, 10] };
const isStored = getProp(data, "isStored");
const user = { name: "Tarik", age: 35 };
const val = getProp(user, "age");
//# sourceMappingURL=keyof.js.map