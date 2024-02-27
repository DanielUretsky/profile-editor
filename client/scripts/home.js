import { initializeUser, initializeUserAvatar, initializeUserInitials, initilizeUserPurchases, initilizeUserBalance } from '../utils/home/initializingUser.js'
import { initializeShop, showAvatarFrames, showProfileBckgrounds, showProfileBadges} from '../utils/home/initializingShop.js'

// const usernameSpan = document.getElementById("username");
// const emailSpan = document.getElementById("email");
// const genderSpan = document.getElementById("gender");

// const userBalanceParagraph = document.getElementById("balance");
// const userItemsDiv = document.getElementById("userItems");

// const avatarFramesItemsdDiv = document.getElementById("avatarFramesItems");

/* --start-- */
initializeUser()
    .then(user => initializeUserInitials(user)
        .then(() => initializeUserAvatar(user.image))
        .then(() => initilizeUserBalance(user.coinsBalance))
        .then(() => initilizeUserPurchases())
        .catch(err => console.log(err)))
    .catch(err => console.log(err));

initializeShop()
    .then(() => showAvatarFrames())
    .then(() => showProfileBckgrounds())
    .then(() => showProfileBadges())
    .catch(err => console.log(err))


