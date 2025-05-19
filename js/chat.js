// Book data
const books = [
    {
      id: 1,
      name: "It",
      description:
        "A horror novel by Stephen King that takes readers to the small town of Derry, Maine, where a group of children confronts an ancient evil entity. This being, who takes the shape of a clown named Pennywise, feeds on the fears and anxieties of the children. The story is set in two timelines, with the children battling the evil in the 1950s, and as adults, they return to Derry to face it again. The novel explores themes of friendship, fear, trauma, and the battle between good and evil.",
      price: 19.99,
      image: "https://m.media-amazon.com/images/I/71N2oKE+cnL.AC_UF1000,1000_QL80.jpg",
    },
    {
      id: 2,
      name: "The Shining",
      description:
        "Stephen King's psychological horror novel that takes place at the Overlook Hotel, an isolated resort high in the Colorado Rockies. The story follows Jack Torrance, a struggling writer who accepts a job as the hotel's winter caretaker. He moves in with his wife Wendy and young son Danny, who has psychic abilities. As winter sets in and the hotel becomes snowbound, Jack begins to unravel, influenced by malevolent supernatural forces in the hotel. The novel explores themes of isolation, madness, and the effects of past trauma on individuals.",
      price: 15.99,
      image: "https://m.media-amazon.com/images/I/91U7HNa2NQL.jpg",
    },
    {
      id: 3,
      name: "Carrie",
      description:
        "Stephen King's debut novel tells the story of Carrie White, a shy and introverted high school student with a religiously oppressive upbringing. Carrie discovers she has telekinetic powers, and her life takes a dark turn after being cruelly bullied by her classmates. The novel culminates in a dramatic and violent high school prom night disaster, as Carrie unleashes her powers in a horrifying display of revenge. Carrie explores themes of bullying, adolescence, and the dangerous consequences of repression and cruelty.",
      price: 14.99,
      image: "https://dynamic.indigoimages.ca/v1/books/books/1984898108/1.jpg",
    },
    {
      id: 4,
      name: "Harry Potter and the Sorcerer's Stone",
      description:
        "The first book in J.K. Rowling's Harry Potter series introduces us to Harry, a young boy who discovers on his 11th birthday that he is a wizard. Harry is taken to Hogwarts School of Witchcraft and Wizardry, where he learns magic, makes friends, and uncovers secrets about his past. As he becomes more aware of his own extraordinary abilities, Harry confronts the dark wizard who killed his parents, setting the stage for an epic battle between good and evil. The book mixes themes of friendship, bravery, and identity with a richly built magical world.",
      price: 10.99,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
    },
    {
      id: 5,
      name: "A Game of Thrones",
      description:
        "The first book in A Song of Ice and Fire series by George R.R. Martin introduces the Seven Kingdoms of Westeros, a world full of political intrigue, war, and ancient magic. The story follows the noble families of the North, the Lannisters, the Starks, and others, as they vie for control of the Iron Throne. At the same time, in the far north, a supernatural threat is growing, one that could destroy all of humanity. The book is known for its complex characters, intricate plots, and shocking twists, along with its exploration of power, loyalty, and survival in a brutal world.",
      price: 17.99,
      image: "https://m.media-amazon.com/images/I/81CiRBnk8VL.AC_UF894,1000_QL80.jpg",
    },
    {
      id: 6,
      name: "Murder on the Orient Express",
      description:
        "Agatha Christie's classic detective novel featuring her famous Belgian detective Hercule Poirot. The story is set aboard the luxurious train, the Orient Express, traveling from Istanbul to Calais. When a wealthy passenger is murdered during the journey, Poirot is called upon to solve the case. As Poirot uncovers secrets about the passengers and their motivations, he realizes that the truth is far more complex than it first appears. The novel explores themes of justice, revenge, and morality, with a thrilling and unexpected conclusion.",
      price: 12.99,
      image: "https://whs.dmmserver.com/media/640/97800085/9780008516000.jpg",
    },
  ]
  
  // Display books on the page
  function displayBooks() {
    const booksContainer = document.getElementById("book-list")
  
    books.forEach((book) => {
      const bookCard = document.createElement("div")
      bookCard.className = "book-card"
  
      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.name}" class="book-image">
        <div class="book-info">
          <h2 class="book-name">${book.name}</h2>
          <p class="book-description">${book.description}</p>
          <p class="book-price">$${book.price.toFixed(2)}</p>
        </div>
      `
  
      booksContainer.appendChild(bookCard)
    })
  }
  
  // Initialize chatbot
  function initChatbot() {
    const chatButton = document.getElementById("chat-button")
    const chatBox = document.getElementById("chat-box")
    const closeChat = document.getElementById("close-chat")
    const sendButton = document.getElementById("send-button")
    const userInput = document.getElementById("user-input")
    const chatMessages = document.getElementById("chat-messages")
  
    // Toggle chat box
    chatButton.addEventListener("click", () => {
      chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex"
    })
  
    closeChat.addEventListener("click", () => {
      chatBox.style.display = "none"
    })
  
    // Send message
    function sendMessage() {
      const message = userInput.value.trim()
      if (message === "") return
  
      // Add user message to chat
      addMessage(message, "user")
  
      // Process the message and get a response
      const response = processMessage(message)
  
      // Clear input
      userInput.value = ""
  
      // Add bot response with a slight delay to simulate thinking
      setTimeout(() => {
        addMessage(response, "bot")
      }, 500)
    }
  
    sendButton.addEventListener("click", sendMessage)
  
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage()
      }
    })
  
    // Add message to chat
    function addMessage(text, sender) {
      const messageDiv = document.createElement("div")
      messageDiv.className = `message ${sender}`
  
      const messageContent = document.createElement("div")
      messageContent.className = "message-content"
      messageContent.innerHTML = text
  
      messageDiv.appendChild(messageContent)
      chatMessages.appendChild(messageDiv)
  
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight
    }
  }
  
  // Process user message and return a response
  function processMessage(message) {
    message = message.toLowerCase()
  
    // Check for book information requests
    const bookMatch = books.find(
      (book) =>
        message.includes(book.name.toLowerCase()) ||
        message.includes(`"${book.name.toLowerCase()}"`) ||
        message.includes(`'${book.name.toLowerCase()}'`),
    )
  
    if (bookMatch) {
      if (message.includes("price") || message.includes("cost") || message.includes("how much")) {
        return `"${bookMatch.name}" costs $${bookMatch.price.toFixed(2)}.`
      } else if (message.includes("tell me about") || message.includes("what is") || message.includes("description")) {
        return `<strong>${bookMatch.name}</strong>: ${bookMatch.description}`
      } else {
        return `<strong>${bookMatch.name}</strong> by ${
          bookMatch.name === "Harry Potter and the Sorcerer's Stone"
            ? "J.K. Rowling"
            : bookMatch.name === "A Game of Thrones"
              ? "George R.R. Martin"
              : bookMatch.name === "Murder on the Orient Express"
                ? "Agatha Christie"
                : "Stephen King"
        }.<br><br>
                ${bookMatch.description}<br><br>
                Price: $${bookMatch.price.toFixed(2)}`
      }
    }
  
    // Check for author queries
    if (message.includes("stephen king") || message.includes("king books")) {
      const kingBooks = books.filter((book) => ["It", "The Shining", "Carrie"].includes(book.name))
  
      let response = "Stephen King books in our collection:<ul>"
      kingBooks.forEach((book) => {
        response += `<li>${book.name} - $${book.price.toFixed(2)}</li>`
      })
      response += "</ul>"
      return response
    }
  
    if (message.includes("j.k. rowling") || message.includes("rowling") || message.includes("harry potter")) {
      return "We have 'Harry Potter and the Sorcerer's Stone' by J.K. Rowling in our collection for $10.99."
    }
  
    if (message.includes("george r.r. martin") || message.includes("martin") || message.includes("game of thrones")) {
      return "We have 'A Game of Thrones' by George R.R. Martin in our collection for $17.99."
    }
  
    if (message.includes("agatha christie") || message.includes("christie") || message.includes("orient express")) {
      return "We have 'Murder on the Orient Express' by Agatha Christie in our collection for $12.99."
    }
  
    // Price queries
    if (message.includes("cheapest") || message.includes("lowest price")) {
      const cheapestBook = books.reduce((prev, current) => (prev.price < current.price ? prev : current))
      return `The cheapest book in our collection is "${cheapestBook.name}" at $${cheapestBook.price.toFixed(2)}.`
    }
  
    if (message.includes("most expensive") || message.includes("highest price")) {
      const expensiveBook = books.reduce((prev, current) => (prev.price > current.price ? prev : current))
      return `The most expensive book in our collection is "${expensiveBook.name}" at $${expensiveBook.price.toFixed(2)}.`
    }
  
    if (message.includes("all books") || message.includes("list all") || message.includes("show all")) {
      let response = "Here are all the books in our collection:<ul>"
      books.forEach((book) => {
        response += `<li>${book.name} - $${book.price.toFixed(2)}</li>`
      })
      response += "</ul>"
      return response
    }
  
    // General queries
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! How can I help you with our book collection today?"
    }
  
    if (message.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about our books?"
    }
  
    if (message.includes("help") || message.includes("what can you do")) {
      return `I can help you with information about our book collection. You can ask me about:
      <ul>
        <li>Specific books (e.g., "Tell me about It")</li>
        <li>Book prices (e.g., "How much is Carrie?")</li>
        <li>Books by a specific author (e.g., "Show me Stephen King books")</li>
        <li>Price comparisons (e.g., "What's the cheapest book?")</li>
        <li>All books in our collection</li>
      </ul>`
    }
  
    // Default response
    return "I'm not sure I understand. You can ask me about specific books, authors, or prices. Try asking something like 'Tell me about It' or 'How much is Harry Potter?'"
  }
  
  // Initialize when the page loads
  window.addEventListener("DOMContentLoaded", () => {
    displayBooks()
    initChatbot()
  })