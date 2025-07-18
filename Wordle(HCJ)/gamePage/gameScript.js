let answer;
async function getWord() {
    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word?length=5")
        const data = await response.json();
        answer = Array.from(data[0])
        console.log(answer)
    } catch (error) {
        console.error("Failed to fetch word:", error);
    }
}

getWord()
let letterNum = 1
const regex = /^[a-zA-Z]+$/
let letter
let userAttempt = []
let rowNum = 1


document.addEventListener('keyup', (event)=> {
    let enteredKey = ""
    enteredKey = event.key
    console.log(enteredKey)
    if (regex.test(enteredKey) == true){
        if (enteredKey.length < 2) {
            if (letterNum > 5) {
                alert("Cannot enter more words")
            } else {
                document.querySelector(`#row${rowNum} .box #letter${letterNum}`).textContent = enteredKey
                letterNum += 1
            }
        } else if (enteredKey == "Backspace"){
            if (letterNum > 1) {
                // console.log(letterNum)
                // console.log(document.querySelector(`#row${rowNum} .box #letter${letterNum-1}`).textContent)
                document.querySelector(`#row${rowNum} #letter${letterNum-1}`).textContent = ""
                letterNum -= 1
                word.pop()
            }
        } else if (enteredKey == "Enter") {
            if (letterNum > 5) {
                userAttempt = []
                for (let i = 1; i < letterNum; i++) {
                    userAttempt.push(document.querySelector(`#row${rowNum} .box #letter${i}`).textContent)
                }
                console.log(userAttempt)
                rowNum +=1
                letterNum = 1
            }
        }

    }
    
})



