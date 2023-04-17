document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission
    
    // get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // check if user exists (example condition)
    if (username === 'example' && password === 'password') {
      window.location.href = 'dashboard.html'; // redirect to dashboard
    } else {
      $('#myModal').modal('show'); // show error modal
    }
  });
  
  document.querySelectorAll('form')[1].addEventListener('submit', function(e) {
   
  })
  
  