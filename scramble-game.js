

const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;

const wordDic = ['c++', 'js', 'java', 'php', 'javascript', 'c#', '.net', 'react', 'nodejs', 'angular', 'c', 'android', 'swift', 'go', 'reactnative'];

const createWords = () => {
    let wordind = Math.floor(Math.random()* wordDic.length);
    let word = wordDic[wordind];
    return word;
}

let newWord = "";
let randomWords = "";


const scramble = (arr) => {
    
    for (let i = arr.length - 1; i > 0; i--)
    {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
btn.addEventListener('click', () => {
    
    if (!play)
    {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWord = createWords();
        console.log(newWord);
        randomWords = scramble(newWord.split("")).join("");
        msg.innerHTML = `Guess the word :- ${randomWords}`;
    }
    else
    {
        let inputText = guess.value;
        if (inputText === newWord)
        {
            play = false;
            msg.innerHTML = `Great job,u guessed it correctly`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else
        {
            msg.innerHTML = `Oops!U guessed it wrong,try again.Word is:-"${randomWords}"`;
        }
    }
})