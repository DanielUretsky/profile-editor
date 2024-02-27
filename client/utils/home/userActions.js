import {initilizeUserPurchases, initilizeUserBalance, getUserItems, initializeUserAvatar} from './initializingUser.js'

export const sellItemHandler = async (item) => {
    console.log(item);
    
    const deletedItem = {
        id: item._id,
        price: item.price,
        user: "65dd2a03d3b100b764fddf71"
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

};

export const buyItemHandler = async (item) => {
    const purchasedItem = {
        externalID: item.id,
        type: item.type,
        price: item.price,
        properties: item.properties,
        user: "65dd2a03d3b100b764fddf71"
    }
    const userPurchases = await getUserItems();
    const isEquiped = userPurchases.find(purchase => purchase.externalID === purchasedItem.externalID);

    if(isEquiped) return alert('You have already purchased this item');

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
};

export const equipItemHandler = (item) => {
    if(item.type === "avatarFrame"){
        const userAvatarDiv = document.getElementById("userAvatar");
        userAvatarDiv.style.boxShadow = item.properties.css['box-shadow']; 
    }
    if(item.type === "profileBackground"){
        const profileBgLayoutDiv = document.getElementById("profileBgLayout");
        profileBgLayoutDiv.style.backgroundImage = `url('${item.properties.url}')`;
    }
    if(item.type === "profileBadge"){
        const usernameDiv = document.getElementById("usernameDiv");
        const usernameImage = document.createElement("img");
        
        usernameImage.src = item.properties.url;

        usernameImage.classList.add("username-image")
        usernameDiv.append(usernameImage);
    }
}

export const uploadUserImage = async (imageBase64) => {
    const response = await fetch("http://localhost:4000/users/uploadImage/65dd2a03d3b100b764fddf71", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({imageBase64})
    });

    const data = await response.text();

    await initializeUserAvatar(imageBase64);
}