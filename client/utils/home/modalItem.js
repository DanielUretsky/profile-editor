import {sellItemHandler, buyItemHandler, equipItemHandler} from './userActions.js'

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