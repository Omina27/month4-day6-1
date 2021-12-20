//Sign Up
let storage = window.localStorage
let users = getData('users') ?? []


signUpForm.addEventListener('submit', e=> {
    e.preventDefault()
    let currentTime = Date.now()

    let username = signUpUsername.value.trim()
    let email = signUpEmail.value.trim()
    let password = signUpPassword.value.trim()

    let foundUser = users.find(item => item.email == email && username == username)     

    
    if(!foundUser) {
        users.push({
            id:currentTime,
            username,
            email,
            password  
        })
        result.textContent = 'Success!'
    }else {
        result.textContent = 'User exist!'
    }

    

    //get function from function .js
    saveData(users, "users");
    console.log(users);
})
