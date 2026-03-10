// ==================== MOCK DATA ====================

// Mock Books Data - 15 classic books
const MOCK_BOOKS = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        stock: 50,
        description: "A classic American novel about wealth, love, and the American Dream in the Jazz Age."
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
        stock: 45,
        description: "A gripping tale of racial injustice and childhood innocence in the American South."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 13.99,
        stock: 60,
        description: "A dystopian novel exploring totalitarianism and surveillance in a nightmarish future."
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 11.99,
        stock: 55,
        description: "A romantic novel about Elizabeth Bennet navigating love, marriage, and social class."
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 10.99,
        stock: 40,
        description: "A coming-of-age story following the troubled youth Holden Caulfield in New York City."
    },
    {
        id: 6,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        price: 9.99,
        stock: 35,
        description: "A passionate gothic romance set in the Yorkshire moors filled with dark secrets."
    },
    {
        id: 7,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        price: 11.99,
        stock: 48,
        description: "A feminist novel following orphan Jane as she finds love and independence."
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 15.99,
        stock: 70,
        description: "An epic fantasy adventure following Bilbo Baggins on a quest for treasure."
    },
    {
        id: 9,
        title: "Moby Dick",
        author: "Herman Melville",
        price: 13.99,
        stock: 25,
        description: "An epic maritime novel about Captain Ahab's obsessive quest for a white whale."
    },
    {
        id: 10,
        title: "Brave New World",
        author: "Aldous Huxley",
        price: 12.99,
        stock: 42,
        description: "A dystopian vision of a seemingly perfect future society based on pleasure and conformity."
    },
    {
        id: 11,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: 24.99,
        stock: 65,
        description: "An epic fantasy trilogy following Frodo's journey to destroy the One Ring."
    },
    {
        id: 12,
        title: "Frankenstein",
        author: "Mary Shelley",
        price: 10.99,
        stock: 38,
        description: "A gothic novel exploring the dangers of unchecked scientific ambition through Victor Frankenstein's tale."
    },
    {
        id: 13,
        title: "Dune",
        author: "Frank Herbert",
        price: 18.99,
        stock: 52,
        description: "A science fiction epic set on the desert planet Arrakis with complex politics and mysticism."
    },
    {
        id: 14,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        price: 16.99,
        stock: 44,
        description: "A series of fantasy adventures in the magical land of Narnia accessible through a wardrobe."
    },
    {
        id: 15,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        price: 9.99,
        stock: 33,
        description: "A dark tale of vanity and corruption as a man remains eternally young while his portrait ages."
    }
];

// Mock Ratings Data
const MOCK_RATINGS = {
    1: [
        { id: 1, rating: 5, comment: "A masterpiece! Simply beautiful prose and compelling characters.", date: "2026-01-20" },
        { id: 2, rating: 4, comment: "Great classic, but a bit slow at times.", date: "2026-01-15" }
    ],
    2: [
        { id: 3, rating: 5, comment: "Essential reading. Powerful and moving story about justice and courage.", date: "2026-01-18" },
        { id: 4, rating: 5, comment: "Absolutely brilliant!", date: "2026-01-10" },
        { id: 5, rating: 4, comment: "Very good book, tackles important themes.", date: "2026-01-05" }
    ],
    3: [
        { id: 6, rating: 5, comment: "Dystopian vision that's still relevant today. Chilling and unforgettable.", date: "2026-02-01" }
    ],
    4: [
        { id: 7, rating: 5, comment: "Romantic and witty. Austen is a genius!", date: "2026-02-05" },
        { id: 8, rating: 4, comment: "Classic love story with great humor.", date: "2026-01-28" }
    ]
};

// Mock Customers Data
const MOCK_CUSTOMERS = {
    1: { id: 1, name: "John Doe", email: "john@example.com" },
    2: { id: 2, name: "Jane Smith", email: "jane@example.com" }
};

// Mock Cart Data
const MOCK_CARTS = {
    1: {
        id: 1,
        customer_id: 1,
        total_price: 39.97,
        items: [
            { id: 1, book_id: 1, title: "The Great Gatsby", quantity: 1, price: 12.99 },
            { id: 2, book_id: 2, title: "To Kill a Mockingbird", quantity: 1, price: 14.99 },
            { id: 3, book_id: 3, title: "1984", quantity: 1, price: 13.99 }
        ]
    }
};

// Mock Orders Data
const MOCK_ORDERS = {
    1: {
        id: 1,
        customer_id: 1,
        date: "2026-01-15",
        status: "Delivered",
        total_price: 45.99,
        items: 3,
        tracking: "TRK001234567"
    },
    2: {
        id: 2,
        customer_id: 1,
        date: "2026-01-10",
        status: "Shipped",
        total_price: 32.50,
        items: 2,
        tracking: "TRK001234568"
    }
};

// Mock Staff & Managers
const MOCK_STAFF = [
    { id: 1, name: "John Smith", email: "john.smith@bookstore.com", role: "Staff", status: "Active" },
    { id: 2, name: "Sarah Johnson", email: "sarah.j@bookstore.com", role: "Manager", status: "Active" }
];
