document.getElementById('hamburger').addEventListener('click', function () {
    const actions = document.getElementById('headerActions');
    actions.classList.toggle('show');
});





document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");
    const bookList = document.getElementById("book-list");
    const booksHeader = document.getElementById("books");
    const suggestionsBox = document.querySelector(".suggestions");

    let booksData = [];

    // Load books once for autocomplete
    fetch("js/books.json")
        .then(response => response.json())
        .then(data => {
            booksData = data;
        });

    // Show suggestions on input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        suggestionsBox.innerHTML = "";

        if (query.length === 0) return;

        const matchedBooks = booksData.filter(book =>
            book.name.toLowerCase().includes(query)
        ).slice(0, 5); // limit to 5 suggestions

        matchedBooks.forEach(book => {
            const div = document.createElement("div");
            div.textContent = book.name;
            div.addEventListener("click", () => {
                searchInput.value = book.name;
                suggestionsBox.innerHTML = "";
                searchButton.click(); // simulate search
            });
            suggestionsBox.appendChild(div);
        });
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            suggestionsBox.innerHTML = "";
        }
    });

    // Existing search click logic
    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            fetch("js/books.json")
                .then(response => response.json())
                .then(data => {
                    const filteredBooks = data.filter(book => {
                        return (
                            book.name.toLowerCase().includes(searchTerm) ||
                            book.description.toLowerCase().includes(searchTerm)
                        );
                    });
                    bookList.innerHTML = "";
                    booksHeader.textContent = "Search Result";
                    if (filteredBooks.length > 0) {
                        filteredBooks.forEach(book => {
                            const bookCard = `
                                <div class="book-card">
                                    <img src="${book.image || ''}" alt="${book.name || ''}" onclick="viewbook(${book.id})">
                                    <h3>${book.name || ''}</h3>
                                    <button class="viewnow" onclick="viewbook(${book.id})">View Now</button>
                                </div>
                            `;
                            bookList.innerHTML += bookCard;
                        });
                    } else {
                        bookList.innerHTML = `<p>No books found matching your search.</p>`;
                    }
                });
        }
    });
});



  window.addEventListener('DOMContentLoaded', () => {
    const testimonialsContainer = document.getElementById('testimonialsList');
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks'));

    // If no feedbacks in localStorage, set 2 default ones
    if (!feedbacks || feedbacks.length === 0) {
      feedbacks = [
        {
          name: "Alice Johnson",
          feedback: "I love the variety of books available here. The user experience is smooth and engaging!",
          rating: 5
        },
        {
          name: "Mohammad Rizwan",
          feedback: "Excellent service and fast delivery. I'd like to see more Urdu books though.",
          rating: 4
        }
      ];
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }

    // Show up to 4 latest feedbacks
    feedbacks.slice(-4).reverse().forEach(fb => {
      const card = document.createElement('div');
      card.className = 'testimonial-card';
      card.innerHTML = `
        <h4>${fb.name}</h4>
        <p>${fb.feedback}</p>
        <div class="testimonial-rating">Rating: ${'★'.repeat(fb.rating)}</div>
      `;
      testimonialsContainer.appendChild(card);
    });
  });


