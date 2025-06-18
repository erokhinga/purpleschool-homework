let obj1 = { a: 5, b: '' };
let obj2 = { a: 10, c: true };
function difference(obj1, obj2) {
    const diff = {};
    for (const key in obj1) {
        // if (!(key in obj2) || obj1[key] !== obj2[key]) {
        if (!(key in obj2)) {
            diff[key] = obj1[key];
        }
    }
    return diff;
}
let v0 = difference(obj1, obj2);
console.log(v0);
export {};
