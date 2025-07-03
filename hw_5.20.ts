// ДЗ 5.20 Классы
// на проверку

class CustomHashMap {
	private buckets: { key: string, value: number }[][]
	private size: number

	constructor(bucketCount: number = 16) {
		this.buckets = new Array(bucketCount)
		for (let i = 0; i < bucketCount; i++) {
			this.buckets[i] = []
		}
		this.size = 0
	}

	// размер мапы
	public getSize(): number {
		return this.size;
	}

	// хэш-функция
	private hashFunction(key: string): number {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash = (hash * 31 + key.charCodeAt(i)) >>> 0 // неотрицательное целое число
		}
		return hash % this.buckets.length;
	}

	// добавление ключ-значений
	public add(key: string, value: number): void {
		const index = this.hashFunction(key)
		const bucket = this.buckets[index]

		// проверяем есть ли уже такой ключ (тогда обновлем значение)
		for (let item of bucket) {
			if (item.key === key) {
				item.value = value
				return;
			}
		}

		bucket.push({ key, value })
		this.size++;
	}

	// получение значений по ключу
	public get(key: string): number | undefined {
		const index = this.hashFunction(key)
		const bucket = this.buckets[index]

		for (let item of bucket) {
			if (item.key === key) {
				return item.value
			}
		}
		return undefined;
	}

	// удаление ключ-значений
	public delete(key: string): boolean {
		const index = this.hashFunction(key)
		const bucket = this.buckets[index]

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				bucket.splice(i, 1)
				this.size--
				return true
			}
		}
		return false;
	}

	// очистка мапы
	public clear(): void {
		for (let bucket of this.buckets) {
			bucket.length = 0
		}
		this.size = 0
	}
}

//
const myMap = new CustomHashMap()
myMap.add("London", 20)
myMap.add("Berlin", 25)

console.log(myMap.get("London")) // 20
myMap.delete("London");
console.log(myMap.get("London")) // undefined

console.log(myMap.get("Berlin")) // 25

myMap.clear();
console.log(myMap.getSize()) // 0