type User = {
    name: string;
    age: number;
}

type Address = {
    country: string;
    apartment_num: number;
}

type UserAddress = User & Address;

function createIntersectionType(user: User, address: Address): UserAddress {
    return {
        ...user,
        ...address
    }
}


const someUser: User = {name:'Eric', age:20}
const someAddress: Address = {country: 'USA', apartment_num: 10}

const someUserAddress = createIntersectionType(someUser, someAddress)

console.log(someUserAddress)