const words=["pauta","enero","dudar","logro","sushi","pañal","caida","cargo","tenaz","firme","fresa","teñir"];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const writeWords = async (words) => {
    let index = 0;
    for (const word of words) {
        console.log('write word '+(++index)+'/'+words.length+': '+word);
        const letters = Array.from(word);
        for (const letter of letters) {
            $(".chakra-button[aria-label="+letter+"]").click(); 
            await sleep(50);
        }
        $(".chakra-button[aria-label^=procesar]").click();
        await sleep(1300);
    }
    console.log("GO GO GO!")
};
$(".chakra-button.css-atc2dp").click();
await sleep(100);
writeWords(words);
