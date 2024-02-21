const usernameSpan = document.getElementById("username");
const emailSpan = document.getElementById("email");
const genderSpan = document.getElementById("gender");
const userBalanceParagraph = document.getElementById("balance"); 

const initializeUser = async () => {
    try {
        const response = await fetch('http://localhost:4000/users/65d548bedf4d980f8efa8b13', {
            method: "GET",
        });
       
        const user = await response.json();
        
        if (!user) {
            alert("Something went wrong");
            window.location.href = "http://127.0.0.1:5500/client/pages/registration.html";
        }

        return user;
    } catch (err) {
        throw err;
    }
}

initializeUser()
    .then((user) => {
        usernameSpan.innerText = user.username;
        emailSpan.innerText = user.email;
        genderSpan.innerText = user.gender;
        userBalanceParagraph.innerText = user.coinsBalance;
    })
    .catch(err => console.log(err));