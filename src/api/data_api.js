export async function submitData(data) {
    return await fetch('https://4e0e-173-59-33-48.ngrok-free.app/api/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());
}
