export interface User {
    uniqueId: string
    email: string
}

export function NewUser(id: string, email: string): User {
    return {
        uniqueId: id,
        email: email,
    }
}
