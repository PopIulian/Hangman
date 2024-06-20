let lives = 7;
let hiddenWord = "";
let word = "";
let wrongLetters = "";

function generateWord () {
    word = document.getElementById("word-input").value.trim().toLowerCase();
    hiddenWord = Array(word.length).fill("_");
    let isOnlyLetters = /^[A-Za-z]+$/.test(word);
    document.getElementById("word-input").value = "";
    if (!isOnlyLetters) {
        document.getElementById("message-word").textContent = "The word is not in the correct format!";
        return;
    }
    lives = 7;
    wrongLetters = "";    
    document.getElementById("message-word").textContent = hiddenWord.join(' ');
    document.getElementById("letter-input").disabled = false;
    document.getElementById("letter-button").disabled = false;
    document.getElementById("message-letter").textContent = "";
    document.getElementById("wrong-letters").textContent = "";
    document.getElementById("lives").textContent = "Lives left: " + lives;
}   

function guessLetter() {
    let letter = document.getElementById("letter-input").value.trim().toLowerCase();
    document.getElementById("letter-input").value = "";

    if (letter.length !== 1 || !/^[a-z]$/.test(letter)) {
        document.getElementById("message-letter").textContent = "Please enter a valid letter";
        return;
    }

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; ++i) {
            if (word[i] === letter) {
                hiddenWord[i] = letter;
                document.getElementById("message-word").textContent = hiddenWord.join(' ');
                document.getElementById("message-letter").textContent = "The letter is in the word.";
            }  
        }
    } else {
        --lives;
        wrongLetters += letter + ", ";
        document.getElementById("lives").textContent = "Lives left: " + lives;
        document.getElementById("message-letter").textContent = "The letter is not in the word.";
        document.getElementById("wrong-letters").textContent = "Wrong letters: " + wrongLetters;
    }

    if (!hiddenWord.includes("_")) {
        document.getElementById("message-letter").textContent = "Congratulations! You won!";
        document.getElementById("letter-input").disabled = true;
        document.getElementById("letter-button").disabled = true;
        document.getElementById("message-word").textContent = hiddenWord.join('');
    }
    
    if (lives === 0) {
        document.getElementById("message-letter").textContent = "Unfortunately, you lost. Try again!";
        document.getElementById("letter-input").disabled = true;
        document.getElementById("letter-button").disabled = true;    
    }
}
