const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
    pickupCabinetLocation: { type: String },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;