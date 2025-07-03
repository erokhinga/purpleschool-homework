class CustomHashMap {
    buckets;
    size;
    constructor(bucketCount = 16) {
        this.buckets = new Array(bucketCount);
        for (let i = 0; i < bucketCount; i++) {
            this.buckets[i] = [];
        }
        this.size = 0;
    }
    // размер мапы
    getSize() {
        return this.size;
    }
    // хэш-функция
    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) >>> 0; // неотрицательное целое число
        }
        return hash % this.buckets.length;
    }
    // добавление ключ-значений
    add(key, value) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        // проверяем есть ли уже такой ключ (тогда обновлем значение)
        for (let item of bucket) {
            if (item.key === key) {
                item.value = value;
                return;
            }
        }
        bucket.push({ key, value });
        console.log('buckets', this.buckets);
        this.size++;
    }
    // получение значений по ключу
    get(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (let item of bucket) {
            if (item.key === key) {
                return item.value;
            }
        }
        return undefined;
    }
    // удаление ключ-значений
    delete(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }
    // очистка мапы
    clear() {
        for (let bucket of this.buckets) {
            bucket.length = 0;
        }
        this.size = 0;
    }
}
//
const myMap = new CustomHashMap();
myMap.add("London", 20);
myMap.add("Berlin", 25);
console.log(myMap.get("London")); // 20
myMap.delete("London");
console.log(myMap.get("London")); // undefined
console.log(myMap.get("Berlin")); // 25
myMap.clear();
console.log(myMap.getSize()); // 0
export {};
