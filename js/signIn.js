// Sign in
let storage = window.localStorage
let users = getData('users') ?? []

signInForm.addEventListener('submit', e=> {
    e.preventDefault()

    let username = signInUsername.value.trim()
    let password = signInPassword.value.trim()

    let topUser = users.find(user => user.password == password && user.username == username)
    let passUser = users.find(user => user.password == password)
    let nameUser = users.find(user => user.username == username)


    if (passUser && nameUser) {
        result.textContent = 'You are signed in'
    }else if (!passUser) {
        passError.textContent = 'Password is wrong!'
        passError.style.color = "red"
    }else if (!nameUser) {
        userError.textContent = 'Username is wrong!'
        userError.style.color = "red"
    }else if (!passUser && nameUser) {
        result.textContent = 'You can not log in!'
    }


    document.getElementById('signInUsername').value = ''
    document.getElementById('signInPassword').value = ''
})