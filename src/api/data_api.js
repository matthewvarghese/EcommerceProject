export async function submitData(data) {
    return await fetch('https://mtv-backend-576e0c5cc332.herokuapp.com/api/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());
}