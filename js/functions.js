let saveData = (data, saveDataAs) => {
    window.localStorage.setItem("users", JSON.stringify(data))
}

let getData = (getDataAs) => {
    return JSON.parse(window.localStorage.getItem(getDataAs))
}
