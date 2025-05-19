document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      const summary = `
  Contact Form Submission:
  
  Name: ${name || "(empty)"}
  Email: ${email || "(empty)"}
  Message: ${message || "(empty)"}
      `;
  
      alert(summary + "\nForm submitted successfully.");
    });
  });
  