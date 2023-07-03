function getTypeOfAttr(someInstance) {
    if (someInstance.someAttr) {
        return typeof (someInstance.someAttr);
    }
    return someInstance.someAttr;
}
var a = {
    someAttr: null
};
console.log(getTypeOfAttr(a));
