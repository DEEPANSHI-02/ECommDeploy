const mongoose = require('mongoose');
const objectId = mongoose.Schema.ObjectId;
const OrderItemSchema = new mongoose.Schema({
    product: {
        
    },
    quantity: {
        type: Number,
        required: true,
    },
    
})