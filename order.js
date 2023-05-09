const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get the status and pickup cabinet location of a user's order
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const order = await Order.findOne({ userId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json({
            status: order.status,
            pickupCabinetLocation: order.pickupCabinetLocation,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
