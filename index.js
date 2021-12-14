const cards = document.querySelectorAll(".card")
console.log(cards);


//variables  
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card)=>{
  card.addEventListener("click",flip)
})

function flip (){
  // console.log("Flipped Card");
  // console.log(this);
  this.classList.add("flip")


  if(!isFlipped){
    isFlipped = true;
    firstCard = this;
  } else{
    secondCard = this
    checkIt()
  }
}

function checkIt(){
  console.log("Checking.....");
  // firstcard.alt = secomdCard.alt
  if(firstCard.dataset.image === secondCard.dataset.image){
    success()
  }else
  
  fail()
}

function success (){

  console.log("Match Success");
  firstCard.removeEventListener('click',flip)
  secondCard.removeEventListener('click',flip)
  reset()

}

function fail(){
  console.log("Match is a Failed one");
  setTimeout(()=>{
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    reset()
  },250)

}
function reset (){
  isFlipped = false;
  firstCard = null;
  secondCard = null;

}

(function shuffle(){
  cards.forEach((card)=>{
    var index = Math.floor(Math.random()*16);
    card.style.order = index
  })
})()