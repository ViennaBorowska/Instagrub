// the path might need checking. 
const loginEl = document.getElementById('login-button-id');

loginEl.addEventListener('click', async (event) => {

    event.preventDefault()

    const userNameEL = document.getElementById('login-username-input').value.trim()
    const passWordEl = document.getElementById('login-password-input').value.trim()

    if (userNameEL && passWordEl) {
        const res = await fetch('api/users/login', {
            method: "POST",
            body: JSON.stringify({
                username: userNameEL,
                password: passWordEl
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            // alert("Login successful");
            location.reload();
            document.location.replace('/dashboard');
        } else {
            alert("Password or username are incorrect. Please try again");
        }
    }
});