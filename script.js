document.getElementById('jokeBtn').addEventListener('click', generateJoke);

function generateJoke() {
    const jokeEl = document.getElementById('joke');
    jokeEl.textContent = 'Loading...';

    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            jokeEl.textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            jokeEl.textContent = 'Oops! Something went wrong. Please try again.';
            console.error('Error fetching joke:', error);
        });
}