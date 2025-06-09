function swapKeysAndValues(obj) {
    const res = {};
    Object.entries(obj).forEach(([key, value]) => {
        res[value] = key;
    });
    return res;
}
const obj = {
    a: 1,
    b: 2,
};
const res = swapKeysAndValues(obj);
console.log(res);
console.log(res[1]);
console.log(res['1']);
export {};
