fetch





let letterNum = 1
const regex = /^[a-zA-Z]+$/
let letter
let word = []
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
                rowNum +=1
                letterNum = 1
            }
        }

    }
    word = []
    for (let i = 1; i < letterNum; i++) {
        word.push(document.querySelector(`#row${rowNum} .box #letter${i}`).textContent)
    }
    console.log(word)
})



