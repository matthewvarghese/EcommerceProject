export async function LoginAPI(email, password) {
  const response = await fetch('https://mtv-backend-576e0c5cc332.herokuapp.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
    localStorage.setItem('userEmail', email);
    global.loggedInUserEmail = email; 

    return response;
  }
  

  