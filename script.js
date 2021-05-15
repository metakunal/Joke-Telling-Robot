const button =document.getElementById('btn');

function getJokes() {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(res => res.json())
        .then(data => {
            const jokes = data[0];
            getJoke(jokes);
        });
}

function getJoke(jokes) {
    const setup = jokes.setup;
    const punchline = jokes.punchline;
    const joke = setup + punchline;
    setTextMessage(joke);
    speakText();
}

// Init speech
const message = new SpeechSynthesisUtterance();

// Set Text
function setTextMessage(text) {
    message.text = text;
}

function speakText() {
    speechSynthesis.speak(message);
}

// Add event listeners
button.addEventListener('click', getJokes);