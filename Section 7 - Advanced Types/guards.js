"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSource = {
    type: "file",
    path: "some/path/to/file.csv",
};
const dbSource = {
    type: "db",
    connectionUrl: "some-connection-url",
};
function isFile(source) {
    return source.type === "file";
}
function loadData(source) {
    // Open + read file OR reach out to database server
    // if ("path" in source) {
    // if (source.type === "file") {
    if (isFile(source)) {
        // source.path;
        // source.path; => use that to oepn the file
        return;
    }
    // source.connectionUrl; => to reach out to database
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // ...
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        // ...
    }
}
const user = new User("Max");
const admin = new Admin(["ban", "restore"]);
function init(entity) {
    // .join() OR .scan() ...
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
}
//# sourceMappingURL=guards.js.map