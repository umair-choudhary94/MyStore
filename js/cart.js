document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    const cartTable = document.querySelector('table tbody');
    const checkoutButton = document.querySelector('.summary a');

    if (cart.length === 0) {
        cartTable.innerHTML = `<tr><td colspan="4">Your cart is empty.</td></tr>`;
        
        checkoutButton.textContent = 'Nothing in cart';
        checkoutButton.href = '';
    } else {
        cart.forEach(item => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            `;
            cartTable.appendChild(row);
            total += item.price * item.quantity;
        });
       
        checkoutButton.textContent = 'Proceed to Checkout';
    }

    document.querySelector('.summary h3').textContent = `Total: $${total.toFixed(2)}`;
});

