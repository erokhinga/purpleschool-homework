// ДЗ 10.16 Декораторы

class User {
	@AllowFunc()
	age: number = 30
}

function AllowFunc() {
	return (
		target: Object,
		propertyKey: string | symbol,
	) => {
		let value: number

		const setter = function(newValue: number) {
			if (newValue > 0) {
				value = newValue
			}
		}

		const getter = function() {
			return value
		}

		Object.defineProperty(target, propertyKey, {
			set: setter,
			get: getter,
		})
	}
}

const person = new User()
console.log(person.age) // 30

person.age = 0;
console.log(person.age) // 30

person.age = 20;
console.log(person.age) // 20