// ==================== ORDER API ====================

async function createOrder(customerId, totalAmount) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customer_id: customerId, total_amount: totalAmount })
        });

        if (!response.ok) throw new Error('Failed to create order');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock orders (backend unavailable), creating locally');
        const newId = Math.floor(Math.random() * 100000) + 1000;
        const newOrder = {
            id: newId,
            customer_id: customerId,
            date: new Date().toISOString().split('T')[0],
            status: 'Processing',
            total_price: totalAmount,
            items: MOCK_CARTS[customerId]?.items?.length || 0,
            tracking: `TRK${String(newId).padStart(12, '0')}`
        };
        MOCK_ORDERS[newId] = newOrder;
        return newOrder;
    }
}

async function getOrder(orderId) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/${orderId}/`);
        if (!response.ok) throw new Error('Order not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock order data (backend unavailable)');
        return MOCK_ORDERS[orderId] || { id: orderId, status: 'Unknown' };
    }
}

async function processOrderPayment(orderId, method) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/${orderId}/payment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ method })
        });

        if (!response.ok) throw new Error('Payment processing failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock payment (backend unavailable), processing locally');
        if (MOCK_ORDERS[orderId]) {
            MOCK_ORDERS[orderId].status = 'Payment Processed';
        }
        return { success: true, message: 'Mock payment processed' };
    }
}

async function arrangeShipping(orderId, address) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/${orderId}/shipping/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address })
        });

        if (!response.ok) throw new Error('Shipping arrangement failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock shipping (backend unavailable), arranging locally');
        if (MOCK_ORDERS[orderId]) {
            MOCK_ORDERS[orderId].status = 'Shipped';
        }
        return { success: true, message: 'Mock shipping arranged' };
    }
}
