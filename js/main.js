console.log("Up and running!");

var cards=[
  {rank: "queen",suit: "hearts",cardImage: "images/queen-of-hearts.png"},
  {rank: "queen",suit: "diamonds",cardImage: "images/queen-of-diamonds.png"},
  {rank: "king",suit: "hearts",cardImage: "images/king-of-hearts.png"},
  {rank: "king",suit: "diamonds",cardImage: "images/king-of-diamonds.png"}
];

var cardsInPlay=[];

var score=0;

var flipCard = function(cardId){
  var cardId = this.getAttribute('data-id');
  console.log("User flipped "+this.getAttribute('data-id'));
  cardsInPlay.push(cards[this.getAttribute('data-id')])
  this.setAttribute('src', cards[cardId].cardImage);
  if(cardsInPlay.length===2){
    console.log("2 cards in play");
    console.log(cardsInPlay);
    if (cardsInPlay[0].rank===cardsInPlay[1].rank){
      score++;
      alert("You found a match!");
    }else{
      score--;
      alert("Sorry, try again.");
    }
  }
  document.getElementById("score").innerHTML=score;
}
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}



var resetBoard=function(){
  cardsInPlay=[];
   for (var i = 0; i < cards.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('src','images/back.png');
    }
  console.log('this button works');
}

document.getElementById('play').addEventListener('click',resetBoard);

createBoard();
