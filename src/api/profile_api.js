export async function profile() {
    return await fetch('https://335b-206-81-12-171.ngrok-free.app/api/profile', {
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
