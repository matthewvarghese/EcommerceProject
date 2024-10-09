export async function profile() {
    return await fetch('https://teal-fenglisu-217183.netlify.appapi/profile', {
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
