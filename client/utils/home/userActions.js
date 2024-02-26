import {initilizeUserPurchases, initilizeUserBalance} from './initializingUser.js'

export const sellItemHandler = async (item) => {
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

};

export const buyItemHandler = async (item) => {
    const purchasedItem = {
        type: item.type,
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
};

export const equipItemHandler = (item) => {
    console.log(item);
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