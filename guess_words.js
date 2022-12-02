let numberOfWordsToGuess = 16;
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
            $(".MuiButton-sizeSmall[aria-label="+letter+"]").click(); 
            await sleep(10);
        }
        $(".MuiButton-sizeSmall[aria-label^=procesar]").click();
        await sleep(10);
    }
    await sleep(1300);
    
    guessedWords.push($("#notistack-snackbar:nth-of-type(1)").textContent.toLowerCase().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u'));
    console.log(`${guessedWords.length} words guessed`);
    console.log('const words=["'+guessedWords.join('","')+'"];');
    numberOfWordsToGuess--;
    (numberOfWordsToGuess > 0) && guessWords();
};
$(".MuiButton-containedPrimary:nth-of-type(2)").click();
await sleep(300);
guessWords();
