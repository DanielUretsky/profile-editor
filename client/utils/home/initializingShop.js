import {createModalItem, removeModalItem} from './modals.js'

const avatarFramesItemsdDiv = document.getElementById("avatarFramesItems");
const profileBackgroundItemsdDiv = document.getElementById("profileBackgroundItems");
const profileBadgesItemsdDiv = document.getElementById("profileBadgesItems");


export const getAvatarFrames = async () => {
    const response = await fetch('http://localhost:4000/products/avatarFrame');
    const avatarFrames = await response.json();

    return avatarFrames;
};

export const getProfileBackgrounds = async () => {
    const response = await fetch('http://localhost:4000/products/profileBackground');
    const prodileBackgrounds = await response.json();
   
    return prodileBackgrounds;
}

export const getProfileBadges = async () => {
    const response = await fetch('http://localhost:4000/products/profileBadge');
    const profileBadges = await response.json();
  
    return profileBadges;
}

export const initializeShop = async () => {
    const response = await fetch('http://localhost:4000/products', {
        method: "GET",
    });

    const products = await response.json();
    return products;
};

export const showAvatarFrames = async () => {
    const avatarFrames = await getAvatarFrames();

    avatarFrames.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("avatar-frames-items__item");
        itemDiv.style.boxShadow = item.properties.css['box-shadow'];

        avatarFramesItemsdDiv.append(itemDiv);

        itemDiv.addEventListener("mouseenter", () => createModalItem(itemDiv, item));
        itemDiv.addEventListener("mouseleave", (e) => removeModalItem(e));
    });
};

export const showProfileBckgrounds = async() => {
    const profileBackgrounds = await getProfileBackgrounds();
    profileBackgrounds.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("profile-backgrounds-items__item");
        itemDiv.style.backgroundImage = `url('${item.properties.url}')`;

        profileBackgroundItemsdDiv.append(itemDiv);

        itemDiv.addEventListener("mouseenter", () => createModalItem(itemDiv, item));
        itemDiv.addEventListener("mouseleave", (e) => removeModalItem(e));
    });
}

export const showProfileBadges = async () => {
    const profeltBadges = await getProfileBadges();
    profeltBadges.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("profile-badges-items__item");
        itemDiv.style.backgroundImage = `url('${item.properties.url}')`;

        profileBadgesItemsdDiv.append(itemDiv);

        itemDiv.addEventListener("mouseenter", () => createModalItem(itemDiv, item));
        itemDiv.addEventListener("mouseleave", (e) => removeModalItem(e));
    })
}