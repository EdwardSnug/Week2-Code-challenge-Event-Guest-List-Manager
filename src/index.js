let names = [];
let form = document.getElementById("myform")
let listy = document.getElementById("guestnames")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputValue = document.getElementById("myinput").value.trim()
    names.push(inputValue)
    let list = document.createElement('li')
    listy.appendChild(list)
    list.textContent = inputValue
})
