type UserInput = [string, string, number, boolean];

type User = {
    name: string,
    surname: string,
    age: number,
    isMale: boolean
}

function createUser(userInfo: UserInput): User {
    return {
        name: userInfo[0],
        surname: userInfo[1],
        age: userInfo[2],
        isMale: userInfo[3]
    }
}

const someUserInfo: UserInput = ['John', 'Doe', 30, true]

console.log(createUser(someUserInfo))