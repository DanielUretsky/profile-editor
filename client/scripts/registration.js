const haveAccount = document.querySelector('span');
const registrHeader = document.querySelector('.registr-header');
const registrSubheader = document.querySelector('.registr-subheader');
const marker = document.querySelector('.have-account');
const logOutBtn = document.querySelector('.regist-button');
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const logOut = document.createElement('span');
const parent = document.querySelector('.registration-card');

const logInBtn = document.createElement('button');

const changes = function() {
    registrHeader.textContent = 'Please,  LogIN';
    registrSubheader.textContent = 'to get started, you need to log in';
    marker.textContent = 'Need to create an account?';
    logOut.textContent = ' Registration';
    marker.append(logOut);


    logInBtn.classList.add('regist-button');
    logInBtn.textContent = 'logIn';
    parent.append(logInBtn);
    parent.insertBefore(logInBtn, marker);
    
    if(logInBtn) {
        logOutBtn.remove();
    } 


    

    inputs.forEach(() => {
        inputs[0].remove();
        inputs[3].remove();
        inputs[4].remove();
        inputs[5].remove();
    });

    labels.forEach(() =>{
        labels[0].remove();
        labels[3].remove();
        labels[4].remove();
        labels[5].remove();
    });

}

    haveAccount.addEventListener('click', changes);



logOut.addEventListener('click', () => {
    registrHeader.textContent = 'Create an account';
    registrSubheader.textContent = 'to get started, you need to create an account';
    marker.textContent = 'Have already an account? ';
    haveAccount.textContent = ' Login here';
    marker.append(haveAccount);

    parent.append(logOutBtn);
    parent.insertBefore(logOutBtn, marker);

    if(logOutBtn) {
        logInBtn.remove();
    }
    addElements();

    
});



function addElements() {
    let labels = ['UserName', 'Re-enter password', 'Choose gender'];
    
    for(let i = 0; i < labels.length; i++) {
        for(let j = 1; j < 2; j++) {
            let label = document.createElement('label');
            label.classList.add('registr-card-name');
            label.textContent = labels[i];
            parent.append(label);
            let input = document.createElement('input');
            input.classList.add('main');
            parent.append(input);
        }
    }

}



