let numberOfWordsToGuess = 10;
let guessedWords = new Array();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const guessWords = async () => {
    const intentos = [1, 2, 3, 4, 5, 6];
    const word = 'reino';
    for (const intento of intentos) {
        const letters = Array.from(word);
        for (const letter of letters) {
            $(".chakra-button[aria-label="+letter+"]").click(); 
            await sleep(10);
        }
        $(".chakra-button[aria-label^=procesar]").click();
        await sleep(10);
    }
    await sleep(1300);
    setTimeout(() => {
        guessedWords.push($(".Toastify").textContent);
        console.log(`${guessedWords.length} words guessed`);
        console.log('const words=["'+guessedWords.join('","')+'"];')
    }, 2000);
    numberOfWordsToGuess--;
    (numberOfWordsToGuess > 0) && guessWords();
};

guessWords();