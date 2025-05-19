document.addEventListener("DOMContentLoaded", () => {
    fetch("js/books.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("book-list");
            container.innerHTML = "";

            data.forEach(book => {
                const bookCard = `
                    <div class="book-card" ">
                       
                        <img src="${book.image || ''}" alt="${book.name || ''}" onclick="viewbook(${book.id})">
                        <h3 >${book.name || ''}</h3>
                        
                        <button class="viewnow" onclick="viewbook(${book.id})">View Now</button>
                    </div>
                `;
                container.innerHTML += bookCard;
            });
        });
});

function viewbook(id) {
    window.location.href = `book-detail.html?id=${id}`;
}



