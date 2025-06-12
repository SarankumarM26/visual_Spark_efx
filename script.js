document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
    
    // Clear any previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';
    
    // Get form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    
    var isValid = true;
    
    // Validate name
    if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    }
    
    // Validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Valid email is required.';
      isValid = false;
    }
    
    // Validate phone number
    if (!phone) {
      document.getElementById('phoneError').textContent = 'Phone number is required.';
      isValid = false;
    }
    
    // Validate message
    if (!message) {
      document.getElementById('messageError').textContent = 'Message is required.';
      isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
      document.getElementById('successMessage').style.display = 'block';
      // Reset form fields
      document.getElementById('contactForm').reset();
    }
  });
  