document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;
  
  const formMessage = document.getElementById('formMessage');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, company, message })
    });
    
    const data = await response.json();
    
    if (data.success) {
      formMessage.className = 'form-message success';
      formMessage.textContent = data.message;
      document.getElementById('contactForm').reset();
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    formMessage.className = 'form-message error';
    formMessage.textContent = 'Something went wrong. Please try again.';
  }
});
