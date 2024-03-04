import {sellItemHandler, buyItemHandler, equipItemHandler, uploadUserImage} from './userActions.js';
import {userAvatarDiv} from './initializingUser.js';



export const createModalItem = (itemDiv, itemInfo) => {
    const modalDiv = document.createElement("div");
    const itemPriceSpan = document.createElement("span");

    modalDiv.classList.add("modal-item");

    itemPriceSpan.innerText = itemInfo.price;

    modalDiv.appendChild(itemPriceSpan);
    if (itemDiv.parentNode.className === 'items') {
        const sellBtn = document.createElement("button");
        const applyBtn = document.createElement("button");

        sellBtn.classList.add("modal-item__sell");
        applyBtn.classList.add("modal-item__sell");

        sellBtn.textContent = 'Sell';
        applyBtn.textContent = 'Equip';

        modalDiv.appendChild(sellBtn);
        modalDiv.appendChild(applyBtn);
        
        sellBtn.addEventListener("click", () => sellItemHandler(itemInfo));
        applyBtn.addEventListener("click", () => equipItemHandler(itemInfo));
    }
    else {
        const buyBtn = document.createElement("button");
        buyBtn.classList.add("modal-item__buy");

        buyBtn.textContent = 'Buy';
        modalDiv.appendChild(buyBtn);
        
        buyBtn.addEventListener("click", () => buyItemHandler(itemInfo));
    }
    
    itemDiv.appendChild(modalDiv);
};

export const removeModalItem = (e) => {
    e.target.querySelector('.modal-item').remove();
};


export const createAvatarModel = () => {
    const avatarModalDiv = document.createElement("div");

    const uloadImageLabel = document.createElement("label");
    const uloadImageIcon = document.createElement("img");
    const uloadImageInput = document.createElement("input");

    avatarModalDiv.classList.add('avatar-modal');
    uloadImageIcon.classList.add('uload-image-icon');

    uloadImageIcon.src = "../assets/icons/upload.png"
    uloadImageInput.style.display = "none";
    uloadImageInput.type = 'file';
    uloadImageInput.id = 'uploadImage';
    uloadImageLabel.htmlFor = 'uploadImage';
    
    uloadImageLabel.append(uloadImageIcon);
    avatarModalDiv.append(uloadImageLabel);
    avatarModalDiv.append(uloadImageInput);
    userAvatarDiv.append(avatarModalDiv);

    uloadImageInput.addEventListener('change', (e) => {
        const file = uloadImageInput.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", async() => {
            await uploadUserImage(reader.result);
        });
    
       reader.readAsDataURL(file)
    });
}

export const removeAvatarModel = (e) => {
    e.target.querySelector('.avatar-modal').remove();
}


export const createUserInitialsModal = () => {
    const userInitilasModalDiv = document.createElement("div");
    const modalContainerDiv = document.createElement("div");
    const modalContainerHeaderDiv = document.createElement("div");
    const modalContainerHeader = document.createElement("h2");
    const modalContainerInputsDiv = document.createElement("div");
    
    const usernameInputLabel = document.createElement("label");
    const emailInputLabel = document.createElement("label");
    const genderSelectLabel = document.createElement("label");

    const usernameInput = document.createElement("input");
    const emailInput = document.createElement("input");
    const genderSelect = document.createElement("select");
    const genderMaleOption = document.createElement("option");
    const genderFemaleOption = document.createElement("option");

    const saveChangesButton = document.createElement("button");

    userInitilasModalDiv.classList.add("user-initilas-modal");
    modalContainerDiv.classList.add("user-initials-modal-container");
    modalContainerHeaderDiv.classList.add("user-initials-modal-header");
    modalContainerInputsDiv.classList.add("user-initials-modal-inputs");
    
    usernameInput.id = "usernameModal";
    emailInput.id = "emailModal";
    genderSelect.id = "usernameModal";

    usernameInputLabel.htmlFor = "usernameModal";
    emailInputLabel.htmlFor = "emailModal";
    genderSelectLabel.htmlFor = "usernameModal";
    usernameInputLabel.textContent = "Username";
    emailInputLabel.textContent = "Email";
    genderSelectLabel.textContent = "Gender";
    genderMaleOption.textContent = "Male";
    genderFemaleOption.textContent = "Female";
    genderMaleOption.value = "Male";
    genderFemaleOption.value = "Female";

    genderSelect.append(genderMaleOption);
    genderSelect.append(genderFemaleOption);

    modalContainerHeader.textContent = "Edit:"

    modalContainerHeaderDiv.append(modalContainerHeader);

    modalContainerInputsDiv.append(usernameInputLabel)
    modalContainerInputsDiv.append(usernameInput)

    modalContainerInputsDiv.append(emailInputLabel)
    modalContainerInputsDiv.append(emailInput)
    
    modalContainerInputsDiv.append(genderSelectLabel)
    modalContainerInputsDiv.append(genderSelect)

    modalContainerDiv.append(modalContainerHeaderDiv);
    modalContainerDiv.append(modalContainerInputsDiv);
    userInitilasModalDiv.append(modalContainerDiv);
    

    document.body.append(userInitilasModalDiv)
    //saveChangesButton.addEventListener("click", )
}