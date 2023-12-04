function login(event) {
    event.preventDefault();
  
    // Get user inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
  
    // Perform AJAX request to server
    // Send username, password, and remember to the server
  
    // For demonstration purposes, simulate a successful login
    const isLoggedIn = true;
  
    if (isLoggedIn) {
      // Redirect to index.html on successful login
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password');
    }
  }
  