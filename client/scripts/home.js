
const usernameSpan = document.getElementById("username");
const emailSpan = document.getElementById("email");
const genderSpan = document.getElementById("gender");

const userBalanceParagraph = document.getElementById("balance");
const userItemsDiv = document.getElementById("userItems");

const avatarFramesItemsdDiv = document.getElementById("avatarFramesItems");

//utils

const sellItemHandler = async (item) => {
    console.log(item);
    
    const deletedItem = {
        id: item._id,
        price: item.price,
        user: "65d937ddcdad3418c9a29965"
    }

    const response = await fetch("http://localhost:4000/products/sellProduct", {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deletedItem)
    });

    const { userBalance } = await response.json();

    await initilizeUserPurchases();
    await initilizeUserBalance(userBalance);

}

const buyItemHandler = async (item) => {
    const purchasedItem = {
        type: item.type,
        name: item.name,
        price: item.price,
        properties: item.properties,
        user: "65d937ddcdad3418c9a29965"
    }

    const response = await fetch("http://localhost:4000/products/buyProduct", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchasedItem)
    });

    const { userBalance } = await response.json();

    await initilizeUserPurchases();
    await initilizeUserBalance(userBalance);

}

const createModalItem = (itemDiv, itemInfo) => {
    const modalDiv = document.createElement("div");
    const itemPriceSpan = document.createElement("span");

    modalDiv.classList.add("modal-item");

    itemPriceSpan.innerText = itemInfo.price;

    modalDiv.appendChild(itemPriceSpan);
    
    if (itemDiv.className === 'item') {
        const sellBtn = document.createElement("button");

        sellBtn.classList.add("modal-item__sell");
        sellBtn.textContent = 'Sell';

        modalDiv.appendChild(sellBtn)
        
        sellBtn.addEventListener("click", () => sellItemHandler(itemInfo))
    }
    else {
        const buyBtn = document.createElement("button");
        buyBtn.classList.add("modal-item__buy");

        buyBtn.textContent = 'Buy';
        modalDiv.appendChild(buyBtn);
        
        buyBtn.addEventListener("click", () => buyItemHandler(itemInfo))
    }
    
    itemDiv.appendChild(modalDiv);
}




const removeModalItem = (e) => {
    e.target.querySelector('.modal-item').remove();
}

// user methods
const initializeUser = async () => {
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
}

const initializeUserInitials = async (user) => {
    usernameSpan.innerText = user.username;
    emailSpan.innerText = user.email;
    genderSpan.innerText = user.gender;
}

const initilizeUserBalance = async (coinsBalance) => {
    userBalanceParagraph.innerText = coinsBalance;
}

const initilizeUserPurchases = async () => {
    const response = await fetch('http://localhost:4000/users/userPurchases/65d937ddcdad3418c9a29965', {
        method: "GET",
    });
    const purchases = await response.json();
    console.log(purchases);
    if (purchases.length === 0) {
        userItemsDiv.style.gridTemplateColumns = "1fr"
        userItemsDiv.innerText = 'Your back is empty :('
        return;
    }

    userItemsDiv.innerHTML = "";
    purchases.forEach(purchase => {
        const purchaseDiv = document.createElement("div");
        purchaseDiv.classList.add("item");

        if (purchase.type == 'avatarFrame') {
            purchaseDiv.style.boxShadow = purchase.properties.css['box-shadow'];
        }

        userItemsDiv.append(purchaseDiv)

        purchaseDiv.addEventListener("mouseenter", () => createModalItem(purchaseDiv, purchase));
        purchaseDiv.addEventListener("mouseleave", (e) => removeModalItem(e));

    })
}


// shop methods
const initializeShop = async () => {
    const response = await fetch('http://localhost:4000/products', {
        method: "GET",
    });

    const products = await response.json();
    return products;
}

const getAvatarFrames = async () => {
    const response = await fetch('http://localhost:4000/products/avatarFrame');
    const avatarFrames = await response.json();

    return avatarFrames;
}

const showAvatarFrames = async () => {
    const avatarFrames = await getAvatarFrames();

    avatarFrames.forEach(frame => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("avatar-frames-items__item");
        itemDiv.style.boxShadow = frame.properties.css['box-shadow'];

        avatarFramesItemsdDiv.append(itemDiv)

        itemDiv.addEventListener("mouseenter", () => createModalItem(itemDiv, frame));
        itemDiv.addEventListener("mouseleave", (e) => removeModalItem(e));
    })
}




initializeUser()
    .then(user => initializeUserInitials(user)
        .then(() => initilizeUserBalance(user.coinsBalance))
        .then(() => initilizeUserPurchases())
        .catch(err => console.log(err)))
    .catch(err => console.log(err))

initializeShop().then(() => showAvatarFrames())