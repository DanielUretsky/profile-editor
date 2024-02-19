const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/profile-editor')
            .then(() => console.log('Database connected succedfully'))
            .catch(err => console.log(err));
}

module.exports = connectToDB;