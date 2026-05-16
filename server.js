const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "a5663bef",
    database: "local_art_shop"
});

db.connect(err => {
    if (err) console.error("Database connection failed:", err);
    else console.log("Connected to MySQL database");
});

// Get all products
app.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
});

// Add to cart (with ON DUPLICATE KEY UPDATE)
app.post("/api/cart/add", (req, res) => {
    const { product_id, quantity } = req.body;
    const sql = `
        INSERT INTO cart_items (session_id, product_id, quantity)
        VALUES ('guest', ?, ?)
        ON DUPLICATE KEY UPDATE quantity = quantity + ?
    `;
    db.query(sql, [product_id, quantity, quantity], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Added to cart", result });
    });
});

// Get cart items
app.get("/api/cart", (req, res) => {
    const sql = `
        SELECT 
            cart_items.id, 
            products.name, 
            products.price, 
            cart_items.quantity, 
            products.image_url
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
        WHERE session_id='guest'
    `;
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
});

// Update quantity
app.put("/api/cart/update/:id", (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    db.query("UPDATE cart_items SET quantity = ? WHERE id = ?", [quantity, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Quantity updated", result });
    });
});

// Remove item
app.delete("/api/cart/remove/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM cart_items WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Item removed", result });
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));