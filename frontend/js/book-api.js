// ==================== BOOK API ====================

async function getAllBooks() {
    // If backend is disabled, use mock data only (no network calls, no console errors)
    if (typeof USE_BACKEND !== 'undefined' && !USE_BACKEND) {
        console.log('USE_BACKEND is false, using mock books data only');
        return typeof MOCK_BOOKS !== 'undefined' ? MOCK_BOOKS : [];
    }

    try {
        const response = await fetch(`${BOOK_SERVICE}/books/`);
        if (!response.ok) throw new Error('Failed to fetch books');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock books data (backend unavailable)', error);
        if (typeof MOCK_BOOKS !== 'undefined') {
            return MOCK_BOOKS;
        }
        console.error('MOCK_BOOKS is not available, returning empty list');
        return [];
    }
}

async function getBook(bookId) {
    try {
        const response = await fetch(`${BOOK_SERVICE}/books/${bookId}/`);
        if (!response.ok) throw new Error('Book not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock book data (backend unavailable)');
        const book = MOCK_BOOKS.find(b => b.id === parseInt(bookId));
        if (book) return book;
        throw error;
    }
}

async function addBook(bookData) {
    // If backend is disabled, add to mock data only
    if (typeof USE_BACKEND !== 'undefined' && !USE_BACKEND) {
        console.log('USE_BACKEND is false, adding book to mock data only');
        if (Array.isArray(MOCK_BOOKS)) {
            const maxId = MOCK_BOOKS.reduce((max, b) => b.id > max ? b.id : max, 0);
            const newBook = { id: maxId + 1, ...bookData };
            MOCK_BOOKS.push(newBook);
            return newBook;
        }
        return bookData;
    }

    try {
        const response = await fetch(`${BOOK_SERVICE}/books/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });

        if (!response.ok) throw new Error('Failed to add book');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Add book error:', error);
        // Fallback: update mock data so UI still works when backend is down
        if (Array.isArray(MOCK_BOOKS)) {
            console.log('Backend unavailable when adding book, updating mock data instead');
            const maxId = MOCK_BOOKS.reduce((max, b) => b.id > max ? b.id : max, 0);
            const newBook = { id: maxId + 1, ...bookData };
            MOCK_BOOKS.push(newBook);
            return newBook;
        }
        throw error;
    }
}

async function updateBook(bookId, bookData) {
    try {
        const response = await fetch(`${BOOK_SERVICE}/books/${bookId}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });

        if (!response.ok) throw new Error('Failed to update book');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Update book error:', error);
        throw error;
    }
}
