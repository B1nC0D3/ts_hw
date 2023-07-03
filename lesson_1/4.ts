enum UserAccessLevel {
    Admin,
    Manager,
    User
}

function getUserAccessLevel(num: number): string {
    return UserAccessLevel[num]
}

console.log(getUserAccessLevel(1))