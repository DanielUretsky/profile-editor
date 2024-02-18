const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect('mongodb://localhost:27017/profile-editor')
            .then(() => console.log('Database connected succedfully'))
            .catch(err => console.log(err));
}

module.exports = connectToDB;