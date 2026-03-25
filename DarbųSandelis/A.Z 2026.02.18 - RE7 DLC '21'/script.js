let playerScore = document.getElementById("currentPlayerScore")
playerScore.textContent = "17"

console.log('Testing123')
let x;

if (x = 9){console.log('THSI IS BULLSHIT')}

x = 9
function changePlayerScore(num){
    playerScore.textContent = `${num}`
}
changePlayerScore(18)