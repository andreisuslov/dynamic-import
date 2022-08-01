export { }
console.log("Loading code from 'app' project")

export async function add(a: number, b: number) {
    console.log(a + b)
    return a + b
}