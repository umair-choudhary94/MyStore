document.addEventListener('DOMContentLoaded', () => {
    const payButton = document.querySelector('button[type="submit"]');

    payButton.addEventListener('click', (e) => {
      e.preventDefault(); 

      const data = {
        email: document.getElementById('email').value,
        country: document.getElementById('country').value,
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        address: document.getElementById('address').value,
        apartment: document.getElementById('apartment').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        postcode: document.getElementById('postcode').value,
        phone: document.getElementById('phone').value,
        cardNumber: document.getElementById('card-number').value,
        expiry: document.getElementById('expiry').value,
        cvv: document.getElementById('cvv').value,
        nameOnCard: document.getElementById('name-on-card').value
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let message = `Your order has been placed successfully. Here are the details:\n\n`;
      message += `Items:\n`;
      cart.forEach(item => {
        message += `${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
      });
      message += `\nTotal: $${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}`;
      alert(message);

      // Clear cart from localstorage after checkout
      localStorage.removeItem('cart');
    });

    function formatKey(key) {
      return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace('-', ' ');
    }
  });