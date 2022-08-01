console.log("Loading code from 'user' project")
async function main(value: any) {
    document.getElementById('messages').innerHTML = value
    console.log(value)
    console.log("main loaded")
}

async function showValue() {
    const randomValue = new Date().getTime()
    const url = `/dist/app.js?c=${randomValue}` // here we add to url a 'randomValue', it must change with each new import to trigger reimport
    const appModule = await import(url) // dynamic import of the module from another TS project
    const value = await appModule.add(5, 5)
    await main(value)
}

const button = document.getElementById('refresh')
button.addEventListener('click', showValue)