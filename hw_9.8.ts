interface IA {
    a: number,
    b: string,
}

interface IB {
    a: number,
    c: boolean
}

let obj1: IA = {a: 5, b: ''}
let obj2: IB = {a: 10, c: true}

type DiffKeys<T, U> = Exclude<keyof T, keyof U>;

type TypeDiffKeys = DiffKeys<IA, IB>

function difference<T extends object, U extends object>(obj1: T, obj2: U): Pick<T, DiffKeys<T, U>> {
    const diff: Partial<T> = {};

    for (const key in obj1) {
        if (!(key in obj2)) {
            diff[key] = obj1[key];
        }
    }

    return diff as Pick<T, DiffKeys<T, U>>;
}

let v0 = difference(obj1, obj2)
console.log(v0)