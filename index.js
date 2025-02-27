let player={
    name:"Poonji",
    chips: 200
}
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message = " "
let messageEl= document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
//0R
let sumEl= document.querySelector("#sum-el")
// its a borader term css selector, after selecting querry we will define id or class
let cardsE1= document.getElementById("cards-el")
//console.log(cards)
let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name + ": $"+ player.chips

function getRandomCard()
{
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber>10)
    {
        return 10
    }
    else if(randomNumber==1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame()
{
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()

}

function renderGame()
{
    cardsE1.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsE1.textContent+=cards[i] + "  "
    }
    sumEl.textContent="Sum: " + sum

if(sum<=20)
{
    message="Do you want to draw one more card?"
}

else if (sum===21)
{
    message="OHOOOOO you got blackjack"
    hasBlackJack=true
}
else{
    message="you have got out of the game"
    isAlive=false
}
messageEl.innerText=message // you can also use .textcontent
//console.log(hasBlackJack)
}

function newCard()
{
    if(isAlive==true && hasBlackJack==false)
    {
    //console.log("Drawing a new card from the deck!")
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}
}