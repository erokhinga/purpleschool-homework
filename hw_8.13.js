function pickObjectKeys(obj, keys) {
    let result = {};
    for (const key of keys) {
        result[key] = obj[key];
    }
    return result;
}
const user = {
    name: 'Vasiliy',
    age: 8,
    skills: ['typescript', 'javascript']
};
const res = pickObjectKeys(user, ['name', 'skills']);
console.log(res);
export {};
