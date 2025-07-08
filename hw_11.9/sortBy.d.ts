declare module 'sort-by' {

	function sortBy<T>(...props: Array<string | ((key: string, value: any) => any)>): (a: T, b: T) => number

	export default sortBy
}