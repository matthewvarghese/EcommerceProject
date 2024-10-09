export async function submitData(data) {
    return await fetch('https://e00a-206-81-12-171.ngrok-free.app/api/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());
}
