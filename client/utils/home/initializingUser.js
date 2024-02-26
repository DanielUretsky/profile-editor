import {createModalItem, removeModalItem} from './modalItem.js'

const usernameSpan = document.getElementById("username");
const emailSpan = document.getElementById("email");
const genderSpan = document.getElementById("gender");

const userBalanceParagraph = document.getElementById("balance");
const userItemsDiv = document.getElementById("userItems");

export const initializeUser = async () => {
    try {
       
        const response = await fetch('http://localhost:4000/users/65d937ddcdad3418c9a29965', {
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
};

export const initializeUserInitials = async (user) => {
    usernameSpan.innerText = user.username;
    emailSpan.innerText = user.email;
    genderSpan.innerText = user.gender;
};
 
export const initilizeUserBalance = async (coinsBalance) => {
    userBalanceParagraph.innerText = coinsBalance;
};

export const initilizeUserPurchases = async () => {
    const response = await fetch('http://localhost:4000/users/userPurchases/65d937ddcdad3418c9a29965', {
        method: "GET",
    });
    const purchases = await response.json();
    
    if (purchases.length === 0) {
        userItemsDiv.style.gridTemplateColumns = "1fr"
        userItemsDiv.innerText = 'Your back is empty :('
        return;
    };

    userItemsDiv.innerHTML = "";
    purchases.forEach(purchase => {
        const purchaseDiv = document.createElement("div");
        purchaseDiv.classList.add("item");

        if (purchase.type == 'avatarFrame') {
            purchaseDiv.classList.add("avatar-frames-items__item");
            purchaseDiv.style.boxShadow = purchase.properties.css['box-shadow'];
        }
        else if(purchase.type == 'profileBackground'){
            purchaseDiv.classList.add("profile-backgrounds-items__item");
            purchaseDiv.style.backgroundImage = `url('${purchase.properties.url}')`;
        }
        else if(purchase.type == 'profileBadge') {
            purchaseDiv.classList.add("profile-badges-items__item");
            purchaseDiv.style.backgroundImage = `url('${purchase.properties.url}')`;
        }
        
        userItemsDiv.append(purchaseDiv);

        purchaseDiv.addEventListener("mouseenter", () => createModalItem(purchaseDiv, purchase));
        purchaseDiv.addEventListener("mouseleave", (e) => removeModalItem(e));
    });
};