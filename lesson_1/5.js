function createUser(userInfo) {
    return {
        name: userInfo[0],
        surname: userInfo[1],
        age: userInfo[2],
        isMale: userInfo[3]
    };
}
var someUserInfo = ['John', 'Doe', 30, true];
console.log(typeof createUser(someUserInfo));
