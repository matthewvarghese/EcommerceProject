export async function profile() {
    return await fetch('https://4e0e-173-59-33-48.ngrok-free.app/api/profile', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
        }
        return response.json(); // Return JSON data if response is ok
    });
}
