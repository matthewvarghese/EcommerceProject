export async function LoginAPI(email, password) {
  const response = await fetch('https://my-app.herokuapp.com/api/login', {
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
  

  