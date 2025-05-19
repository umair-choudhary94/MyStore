const quotes = [
    {
      text: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "Opportunities don't happen. You create them.",
      author: "Chris Grosser"
    },
    {
      text: "Stay hungry, stay foolish.",
      author: "Steve Jobs"
    }
  ];
  
  // Pick a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Inject into HTML
  document.getElementById('quote').textContent = `"${randomQuote.text}"`;
  document.getElementById('author').textContent = `- ${randomQuote.author}`;
  