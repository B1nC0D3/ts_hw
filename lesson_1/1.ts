interface User {
    name: string;
    age: number;
}

interface Address {
    country: string;
    apartment_num: number;
}

interface UserAddress extends User, Address{}

function createExtendInterface(user: User, address: Address): UserAddress {
    return {
        ...user,
        ...address
    }
}


const someUser: User = {name:'Eric', age:20}
const someAddress: Address = {country: 'USA', apartment_num: 10}

const someUserAddress = createExtendInterface(someUser, someAddress)

console.log(someUserAddress)