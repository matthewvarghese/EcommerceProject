export async function LoginAPI(email, password) {
  const response = await fetch('https://335b-206-81-12-171.ngrok-free.app/api/login', {
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
  

  