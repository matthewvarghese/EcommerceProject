export async function LoginAPI(email, password) {
  const response = await fetch('http://206.81.12.171/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
    localStorage.setItem('userEmail', email);
    global.loggedInUserEmail = email; // Set this when the user logs in

    return response;
  }
  

  