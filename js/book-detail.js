document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    document.getElementById("addToCart").addEventListener("click", function(event) {
        event.preventDefault();
        const quantity = document.querySelector(".quantity-selector input").value;
        fetch("js/books.json")
            .then(res => res.json())
            .then(books => {
                const bookDetails = books.find(p => p.id === bookId);
                // Check if the item is already in the cart
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                let existingItem = cart.find(item => item.id === bookDetails.id);
                if (existingItem) {
                    // If the item is already in the cart, increase its quantity
                    existingItem.quantity = parseInt(existingItem.quantity) + parseInt(quantity);
                } else {
                    // If the item is not in the cart, add it with the specified quantity
                    cart.push({
                        id: bookDetails.id,
                        name: bookDetails.name,
                        price: bookDetails.price,
                        image: bookDetails.image,
                        quantity: quantity
                    });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                
                alert(`Adding ${quantity} copies of book with ID ${bookId} to cart.`);
                
            });
       
    });
   
    fetch("js/books.json")
        .then(res => res.json())
        .then(books => {
            const book = books.find(p => p.id === bookId);
            if (!book) return;

            document.querySelector(".pd-title").textContent = book.name;
            document.getElementById("mainImg").src = book.image;
            document.querySelector(".pd-price-now").textContent = `$${book.price}`;
        document.querySelector(".pd-summary").textContent = book.description;

       
        });    
});