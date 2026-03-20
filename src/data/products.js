const products = [
    {
        id: 1,
        name: "Laptop Stand",
        price: 35,
        image: "https://images.unsplash.com/photo-1623567238235-940ff1311da7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D",
        description: "An adjustable laptop stand that lifts your laptop to a compatable height, improving posture and cooling airflow."
    },
    {
        id: 2,
        name: "Airpods",
        price: 129,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Wireless earbuds with a sleek design that deliver clear sound easy bluetooth connection for music and calls."
    },
    {
        id: 3,
        name: "Mouse",
        price: 25,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91c2V8ZW58MHx8MHx8fDA%3D",
        description: "A smooth lightweight wireless mouse design for preciuse control and compatable daily use."
    },
    {
        id: 4,
        name: "Keyboard",
        price: 45,
        image: "https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
        description: "A modern keyboard with responsive keys that provides fast typing and a clean workspace setup."
    },
    {
        id: 5,
        name: "Glasses",
        price: 65,
        image: "https://images.unsplash.com/photo-1508643315917-6688bbbb4cb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29tcHV0ZXIlMjBHbGFzc2VzfGVufDB8fDB8fHww",
        description: "A stylish pair of lightweight glasses with amodern frame that provides clear vision and everyday comport."
    },
    {
        id: 6,
        name: "Smart Watch",
        price: 150,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "A modern smart watch with a sleek touchscreen display that tracks fitness, shows notifications, and helps manage daily activities."
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        price: 80,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A portable bluetooth speaker that delivers clear, powerful sounds and connects easily to phones, tablets and laptops."
    },
    {
        id: 8,
        name: "Backpack",
        price: 55,
        image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJhY2twYWNrfGVufDB8fDB8fHww",
        description: "A durable and stylish backpack with multiple compartments, designed to safely carry laptops, books, and daily essentials."
    },
]

export function getProducts() {
    return products;
}

export function getProductById(id) {
    return products.find(product => product.id === Number(id));
}