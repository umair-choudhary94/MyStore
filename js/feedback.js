document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const feedback = document.getElementById('bookFeedback').value.trim();
    const rating = document.getElementById('rating').value;

    if (!name || !email || !feedback || !rating) {
      alert('Please fill out all fields.');
      return;
    }

    const feedbackEntry = {
      name,
      email,
      feedback,
      rating,
      date: new Date().toISOString()
    };

    // Get existing feedbacks or create new array
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedbackEntry);

    // Save to localStorage
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    // Clear the form
    document.getElementById('feedbackForm').reset();

    // Show success message
    const messageDiv = document.getElementById('feedbackMessage');
    messageDiv.textContent = "Thank you for your feedback!";
    setTimeout(() => { messageDiv.textContent = ""; }, 3000);
  });