const registrHeader = document.getElementsByClassName('registr-header');
const registrSubheader = document.getElementsByClassName('registr-subheader');
const registrationCardDiv = document.getElementById('registrationCard');

const haveAccountDiv = document.getElementById("haveAccountDiv");
const haveAccountSpan = document.getElementById('haveAccountSpan');

const authBtn = document.getElementById("authBtnToggle");

const userNameInput = document.getElementById("username");
const userNameLabel = document.getElementById("userNameLabel");

const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("emailLabel");
const passwordInput = document.getElementById("password");

const repeatedPasswordInput = document.getElementById("repeatedPassword");
const repeatedPasswordLabel = document.getElementById("repeatedPasswordLabel");

const genderLabel = document.getElementById("gender");

const changeToLoginTemplate = () => {
    userNameInput.remove();
    userNameLabel.remove();
    repeatedPasswordInput.remove();
    repeatedPasswordLabel.remove();
    genderLabel.remove();

    haveAccountDiv.textContent = "Don't have an account?"
    haveAccountSpan.textContent = 'Registration here';
    authBtn.textContent = 'Login';

    haveAccountDiv.append(haveAccountSpan);

    registrHeader.textContent = "Login";
    registrSubheader.textContent = "Please login to your account";
}

const changeToRegistrationTemplate = () => {
    console.log(registrationCardDiv);
    registrationCardDiv.insertBefore(userNameLabel, emailLabel);
    registrationCardDiv.insertBefore(userNameInput, emailLabel);

    registrationCardDiv.insertBefore(repeatedPasswordLabel, authBtn);
    registrationCardDiv.insertBefore(repeatedPasswordInput, authBtn);

    registrationCardDiv.insertBefore(genderLabel, authBtn);

    haveAccountDiv.textContent = "Have an account?"
    haveAccountSpan.textContent = 'Login here';

    authBtn.textContent = 'Registration';
    haveAccountSpan.textContent = "Login here";
    haveAccountDiv.append(haveAccountSpan);
}
    

haveAccountSpan.addEventListener('click', () => {
    haveAccountSpan.textContent === 'Login here' ? changeToLoginTemplate() : changeToRegistrationTemplate()
});




























// const marker = document.querySelector('.have-account');
// const logOutBtn = document.querySelector('.regist-button');

// const inputs = document.querySelectorAll('input');
// const labels = document.querySelectorAll('label');
// const logOut = document.createElement('span');

// const parent = document.querySelector('.registration-card');

// const logInBtn = document.createElement('button');




// const changes = function() {
//     registrHeader.textContent = 'Please, Login';
//     registrSubheader.textContent = 'To get started, you need to log in';

//     marker.textContent = 'Need to create an account?';
//     logOut.textContent = ' Registration';

//     marker.append(logOut);


//     logInBtn.classList.add('regist-button');
//     logInBtn.textContent = 'logIn';
//     parent.append(logInBtn);
//     parent.insertBefore(logInBtn, marker);
    
//     if(logInBtn) {
//         logOutBtn.remove();
//     } 


//     inputs.forEach(() => {
//         inputs[0].remove();
//         inputs[3].remove();
//         inputs[4].remove();
//         inputs[5].remove();
//     });

//     labels.forEach(() =>{
//         labels[0].remove();
//         labels[3].remove();
//         labels[4].remove();
//         labels[5].remove();
//     });

// }



// logOut.addEventListener('click', () => {
//     registrHeader.textContent = 'Create an account';
//     registrSubheader.textContent = 'to get started, you need to create an account';
//     marker.textContent = 'Have already an account? ';
//     haveAccount.textContent = ' Login here';
//     marker.append(haveAccount);

//     parent.append(logOutBtn);
//     parent.insertBefore(logOutBtn, marker);

//     if(logOutBtn) {
//         logInBtn.remove();
//     }
//     addElements();

    
// });

// function addElements() {
//     let labels = ['UserName', 'Re-enter password', 'Choose gender'];
    
//     for(let i = 0; i < labels.length; i++) {
//         for(let j = 1; j < 2; j++) {
//             let label = document.createElement('label');
//             label.classList.add('registr-card-name');
//             label.textContent = labels[i];
//             parent.append(label);
//             let input = document.createElement('input');
//             input.classList.add('main');
//             parent.append(input);
//         }
//     }

// }



