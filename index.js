let firstCard=10
let secondCard=8
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true

let message = " "
function startGame()
{

if(sum<=20)
{
    message="Do you want to draw one more card?😊"
}

else if (sum===21)
{
    message="OHOOOOO you got blackjack 😍"
    hasBlackJack=true
}
else{
    message="you have got out of the game😭"
    isAlive=false
}
console.log(message)
//console.log(hasBlackJack)
}