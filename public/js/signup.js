const signupEL = document.getElementById('sign-up-id');

signupEL.addEventListener('click', async (event) => {

    event.preventDefault()

    const userNameEL = document.getElementById('sign-up-username-input').value.trim()
    const passWordEl = document.getElementById('sign-up-password-input').value.trim()

const newUser = await fetch("api/users/", {
            method: "POST",
            body: JSON.stringify({
    
                username: userNameEL,
                password: passWordEl
            }),
            headers: { 'Content-Type': 'application/json' }
        })
    
        if(newUser.ok){
            document.location.replace('/dashboard')
    
        } else {
            alert('sign up failed')
        }

});