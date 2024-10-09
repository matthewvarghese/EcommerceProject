export async function submitData(data) {
    return await fetch('hhttp://localhost:3001/api/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());
}