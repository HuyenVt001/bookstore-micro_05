// ==================== CUSTOMER API ====================

async function registerCustomer(name, email) {
    try {
        const response = await fetch(`${CUSTOMER_SERVICE}/customers/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });

        if (!response.ok) throw new Error('Registration failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock registration (backend unavailable)');
        // Create a new customer locally
        const newId = Math.floor(Math.random() * 100000) + 100;
        const newCustomer = { id: newId, name, email };
        MOCK_CUSTOMERS[newId] = newCustomer;
        // Auto-create empty cart for new customer
        MOCK_CARTS[newId] = { id: newId, customer_id: newId, total_price: 0, items: [] };
        return newCustomer;
    }
}

async function getCustomer(customerId) {
    try {
        const response = await fetch(`${CUSTOMER_SERVICE}/customers/${customerId}/`);
        if (!response.ok) throw new Error('Customer not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock customer data (backend unavailable)');
        return MOCK_CUSTOMERS[customerId] || { id: customerId, name: 'Unknown', email: 'unknown@example.com' };
    }
}
