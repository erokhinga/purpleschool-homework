// На проверку
type User = {
    name: string,
    age: number,
    skills: string[]
}

type OptionalObj<T> = {
    [K in keyof T]?: T[K]
};

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]): OptionalObj<T> {
    let result: OptionalObj<T> = {}
    for (const key of keys) {
        result[key] = obj[key]
    }
    return result
}

const user: User = {
    name: 'Vasiliy',
    age: 8,
    skills: ['typescript', 'javascript']
}

const res = pickObjectKeys(user, ['name', 'skills'])
console.log(res)