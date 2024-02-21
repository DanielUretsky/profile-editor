const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
    properties: {type: mongoose.Schema.Types.Mixed, required: true},
}, {
    versionKey: false,
    strict: true
});

const Purchase = mongoose.model("purchase", purchaseSchema, "purchases");

module.exports = Purchase;