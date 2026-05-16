DROP DATABASE local_art_shop;
CREATE DATABASE local_art_shop;
USE local_art_shop;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    description TEXT,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,   -- for anonymous carts
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(product_id) REFERENCES products(id),
    UNIQUE KEY(session_id, product_id)
);

INSERT INTO products (name, category, price, stock, description, image_url)
VALUES
('Hand-Carved Wooden Bowl', 'Wooden Craft', 25.00, 15, 'Locally carved wooden bowl made from native timber.', 'images/woodenbowl.webp'),
('Rustic Wooden Spoon Set', 'Wooden Craft', 18.50, 30, 'A set of 3 handmade wooden spoons.', 'images/woodenspoons.webp'),
('Decorative Wooden Mask', 'Wooden Craft', 40.00, 10, 'Traditional wooden mask crafted by local artisans.', 'images/woodenmask.webp');

INSERT INTO products (name, category, price, stock, description, image_url)
VALUES
('Hand-Knitted Scarf', 'Knitting Craft', 20.00, 20, 'Warm wool scarf, hand-knitted with local designs.', 'images/scarf.jpg'),
('Knitted Beanie Hat', 'Knitting Craft', 15.00, 25, 'Cozy beanie crafted from soft yarn.', 'images/beanie.webp'),
('Crochet Table Mat', 'Knitting Craft', 12.00, 40, 'Colorful handmade crochet mat.', 'images/mat.webp');

INSERT INTO products (name, category, price, stock, description, image_url)
VALUES
('Local Honey Caramels', 'Sweets', 8.00, 50, 'Sweet caramels made with fresh local honey.', 'images/caramels.webp'),
('Spiced Date Rolls', 'Sweets', 10.00, 40, 'Traditional date sweet with spices.', 'images/date_rolls.webp'),
('Coconut Sugar Fudge', 'Sweets', 6.50, 60, 'Soft fudge made from pure coconut sugar.', 'images/coconut_fudge.webp');

INSERT INTO products (name, category, price, stock, description, image_url)
VALUES
('Ginger Brew (Non-Alcoholic)', 'Local Brewing', 5.00, 70, 'Refreshing spicy ginger drink made traditionally.', 'images/Beer.jpg'),
('Fermented Herbal Tea', 'Local Brewing', 4.50, 80, 'Locally brewed herbal fermentation tea.', 'images/herbal_tea.webp'),
('Tamarind Cool Brew', 'Local Brewing', 4.00, 65, 'Sweet and sour tamarind brew from local recipe.', 'images/tamarind_brew.webp');

SELECT * FROM products;
SELECT * FROM cart_items;
SHOW COLUMNS FROM products;
SELECT id, name, image_url FROM products;


