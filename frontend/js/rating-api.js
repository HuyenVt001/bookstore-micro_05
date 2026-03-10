// ==================== RATING API ====================

async function submitRating(bookId, customerId, rating, comment) {
    try {
        const response = await fetch(`${RATING_SERVICE}/ratings/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ book_id: bookId, customer_id: customerId, rating, comment })
        });

        if (!response.ok) throw new Error('Failed to submit rating');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock ratings (backend unavailable), saving locally');
        // Save rating to mock data
        if (!MOCK_RATINGS[bookId]) {
            MOCK_RATINGS[bookId] = [];
        }
        const newRating = {
            id: MOCK_RATINGS[bookId].length + 1,
            rating,
            comment,
            date: new Date().toISOString().split('T')[0]
        };
        MOCK_RATINGS[bookId].push(newRating);
        return newRating;
    }
}

async function getBookRating(bookId) {
    try {
        const response = await fetch(`${RATING_SERVICE}/books/${bookId}/average-rating/`);
        if (!response.ok) throw new Error('Failed to fetch rating');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock ratings data (backend unavailable)');
        // Return mock ratings for the book
        const ratings = MOCK_RATINGS[bookId] || [];
        return ratings;
    }
}
