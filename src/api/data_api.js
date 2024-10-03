export async function submitData(data) {
    return await fetch('https://teal-fenglisu-217183.netlify.app/api/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());
}
