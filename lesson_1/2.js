var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createIntersectionType(user, address) {
    return __assign(__assign({}, user), address);
}
var someUser = { name: 'Eric', age: 20 };
var someAddress = { country: 'USA', apartment_num: 10 };
var someUserAddress = createIntersectionType(someUser, someAddress);
console.log(someUserAddress);
