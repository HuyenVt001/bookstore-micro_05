// ==================== CART API ====================

async function getCart(customerId) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/`);
        if (!response.ok) throw new Error('Cart not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock cart data (backend unavailable)');
        // Return mock cart for the customer
        return MOCK_CARTS[customerId] || { id: customerId, customer_id: customerId, total_price: 0, items: [] };
    }
}

async function addToCart(customerId, bookId, quantity, price) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/add/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ book_id: bookId, quantity, price })
        });

        if (!response.ok) throw new Error('Failed to add to cart');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock cart (backend unavailable), adding item locally');
        // Use mock cart
        if (!MOCK_CARTS[customerId]) {
            MOCK_CARTS[customerId] = { id: customerId, customer_id: customerId, total_price: 0, items: [] };
        }
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        const newItem = {
            id: Date.now(),
            book_id: bookId,
            title: book?.title || `Book ${bookId}`,
            quantity: quantity,
            price: price
        };
        MOCK_CARTS[customerId].items.push(newItem);
        MOCK_CARTS[customerId].total_price += price * quantity;
        return MOCK_CARTS[customerId];
    }
}

async function updateCartItem(customerId, itemId, quantity) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/items/${itemId}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity })
        });

        if (!response.ok) throw new Error('Failed to update cart item');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock cart (backend unavailable), updating item locally');
        if (MOCK_CARTS[customerId]) {
            const item = MOCK_CARTS[customerId].items.find(i => i.id === itemId);
            if (item) {
                const priceDiff = (quantity - item.quantity) * item.price;
                item.quantity = quantity;
                MOCK_CARTS[customerId].total_price += priceDiff;
            }
        }
        return MOCK_CARTS[customerId];
    }
}

async function removeFromCart(customerId, itemId) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/items/${itemId}/remove/`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to remove item from cart');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock cart (backend unavailable), removing item locally');
        if (MOCK_CARTS[customerId]) {
            const item = MOCK_CARTS[customerId].items.find(i => i.id === itemId);
            if (item) {
                MOCK_CARTS[customerId].total_price -= item.quantity * item.price;
                MOCK_CARTS[customerId].items = MOCK_CARTS[customerId].items.filter(i => i.id !== itemId);
            }
        }
        return MOCK_CARTS[customerId];
    }
}

async function clearCart(customerId) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/clear/`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to clear cart');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock cart (backend unavailable), clearing cart locally');
        if (MOCK_CARTS[customerId]) {
            MOCK_CARTS[customerId].items = [];
            MOCK_CARTS[customerId].total_price = 0;
        }
        return MOCK_CARTS[customerId];
    }
}
