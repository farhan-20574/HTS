"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
};
console.log(user);
const updateUser = Object.assign(Object.assign({}, user), { email: 'john.new@example.com', age: 31 });
console.log(updateUser);
const { email } = user, rest = __rest(user, ["email"]);
console.log(rest);
