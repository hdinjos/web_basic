const cacheKey = "NUMBER";
if (typeof(localStorage) !== "undefined"){
    if (localStorage.getItem(cacheKey) === "undefined"){
        localStorage.setItem(cacheKey, 0);
    }
    const button = document.querySelector("#button");
    const clear = document.querySelector("#clear");
    const count = document.querySelector("#count");
    button.addEventListener("click", (event) => {
        let number = localStorage.getItem(cacheKey);
        number++;
        localStorage.setItem(cacheKey, number);
        count.innerText = localStorage.getItem(cacheKey);
    })

    clear.addEventListener("click", (event) => {
        localStorage.removeItem(cacheKey);
        count.innerText = localStorage.getItem(cacheKey);
    })
}