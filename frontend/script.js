const headerComponent = `
    <header class="header">
        <h1>Best Beers</h1>
        <button class="material-symbols-outlined">menu</button>
    </header>
`
const cardComponent = ``

window.addEventListener("load", () =>{
    console.log(beers);
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend",headerComponent)
})

