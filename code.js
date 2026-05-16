function updateQuantity(id, quantity) {
    quantity = parseInt(quantity);
    if (isNaN(quantity) || quantity < 1) {
        alert("Quantity must be at least 1.");
        loadCart(); // reset input to previous value
        return;
    }

    fetch(`http://localhost:3000/api/cart/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: quantity })
    }).then(() => loadCart());
}

function removeItem(id) {
    if (!confirm("Are you sure you want to remove this item from your cart?")) return;

    fetch(`http://localhost:3000/api/cart/remove/${id}`, { method: "DELETE" })
        .then(() => loadCart());
}

const checkoutBtn = document.getElementById("checkout-btn");

async function loadCart() {
    const response = await fetch("http://localhost:3000/api/cart");
    const cart = await response.json();

    const tbody = document.querySelector("#cart-table tbody");
    tbody.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6">Your cart is empty.</td></tr>`;
    } else {
        cart.forEach(item => {
            const itemTotal = Number(item.price) * item.quantity;
            total += itemTotal;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${item.name}</td>
                <td><img src="http://localhost:3000/${item.image_url}" alt="${item.name}"></td>
                <td>$${Number(item.price).toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td>
                    <button onclick="removeItem(${item.id})">Remove</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
    checkoutBtn.disabled = cart.length === 0;
}




async function loadProducts() {
        try {
            const response = await fetch("http://localhost:3000/api/products");
            const products = await response.json();

            const container = document.getElementById("products");

            if(products.length === 0){
                container.innerHTML = "<p>No products available.</p>";
                return;
            }

            container.innerHTML = products.map(p => `
                <div class="product">
                    <img src="http://localhost:3000/${p.image_url}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>Category: ${p.category}</p>
                    <p>Price: $${Number(p.price).toFixed(2)}</p>
                    <button onclick="addToCart(${p.id})">Add to Cart</button>
                </div>
            `).join("");
        } catch (error) {
            console.error("Error loading products:", error);
        }
    }

    // Add item to cart
    function addToCart(id) {
        fetch("http://localhost:3000/api/cart/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ product_id: id, quantity: 1 })
        })
        .then(res => res.json())
        .then(data => {
            alert("Item added to cart!");
                    if (typeof loadCart === "function") {
                        loadCart();
                    }
        })
        .catch(err => console.error("Cart error:", err));
    }

if (document.getElementById("products")) {
    loadProducts();
}

if (document.getElementById("cart-table-body")) {
    loadCart();
}