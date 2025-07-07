// ДЗ 5.20 Классы
// на проверку
class CustomHashMap {
    buckets;
    size;
    loadFactor;
    threshold;
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity);
        this.size = 0;
        this.loadFactor = loadFactor;
        this.threshold = Math.floor(initialCapacity * loadFactor);
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
        return hash;
    }
    getBucketIndex(key) {
        const hash = this.hashFunction(key);
        return hash % this.buckets.length;
    }
    isNeedResize() {
        return this.size >= this.threshold;
    }
    resize() {
        const newCapacity = this.buckets.length * 2;
        const newBuckets = new Array(newCapacity);
        for (const entry of this.buckets) {
            let current = entry;
            while (current) {
                const index = this.hashFunction(current.key) % newCapacity;
                const newEntry = {
                    key: current.key,
                    value: current.value,
                    next: newBuckets[index],
                };
                newBuckets[index] = newEntry;
                current = current.next;
            }
        }
        this.buckets = newBuckets;
        this.threshold = Math.floor(newCapacity * this.loadFactor);
    }
    // добавление ключ-значений
    add(key, value) {
        const index = this.getBucketIndex(key);
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            current = current.next;
        }
        const newEntry = { key, value, next: this.buckets[index] };
        this.buckets[index] = newEntry;
        this.size++;
        if (this.isNeedResize()) {
            this.resize();
        }
    }
    // получение значений по ключу
    get(key) {
        const index = this.getBucketIndex(key);
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }
    // удаление ключ-значений
    delete(key) {
        const index = this.getBucketIndex(key);
        let current = this.buckets[index];
        let prev;
        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                }
                else {
                    this.buckets[index] = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    // очистка мапы
    clear() {
        this.buckets = new Array(this.buckets.length);
        this.size = 0;
    }
}
//
const myMap = new CustomHashMap(2);
myMap.add("London", 20);
myMap.add("Berlin", 25);
console.log(myMap.get("London")); // 20
myMap.delete("London");
console.log(myMap.get("London")); // undefined
console.log(myMap.get("Berlin")); // 25
myMap.clear();
console.log(myMap.getSize()); // 0
export {};
