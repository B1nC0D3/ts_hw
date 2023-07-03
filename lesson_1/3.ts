type SomeUnionType = {
    someAttr: string | number | boolean | null | undefined | object
}

function getTypeOfAttr(someInstance: SomeUnionType): unknown {
    if (someInstance.someAttr){
        return typeof(someInstance.someAttr)
    }
    return someInstance.someAttr
}

const a: SomeUnionType = {
    someAttr: null
}

console.log(getTypeOfAttr(a))