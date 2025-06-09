function swapKeysAndValues(obj: Record<string, number>): Record<number, string> {
    const res: Record<number, string> = {};
    Object.entries(obj).forEach(([key, value]) => {
        res[value] = key;
    });
    return res;
}

const obj: Record<string, number> = {
    a: 1,
    b: 2,
}

const res = swapKeysAndValues(obj)
console.log(res)
console.log(res[1])
console.log(res['1'])