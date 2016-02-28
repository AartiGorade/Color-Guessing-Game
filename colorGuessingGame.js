var user_guess;
var target_guess;
var randomNo=0;
var finished = false;
var noGuess=0;
function colorGuessingGame() {

var colArray=["black","blue","red","purple","pink","yellow","cyan","gold","gray","green"];
randomNo=Math.floor(Math.random()*colArray.length);
target_guess=colArray[randomNo];
alert("Random color chosen = "+colArray[randomNo]);
do{
  user_guess=prompt("I am thinking of one of these colors:\n\n black,blue,red,purple,pink,yellow,cyan,gold,gray,green \n\n What color I am   thinking of ?");
  noGuess++;
  if(colArray.indexOf(user_guess)==-1)
      alert("Sorry, I don't recognize entered color. \n\nPlease try again.")
  else if(user_guess==target_guess)
      finished=true;
  else if(user_guess<target_guess)
      alert("Sorry, Your guess is not correct !\n\n Hint: Your guess is alphabetically lower than mine\n\nPlease try again.");
  else if(user_guess>target_guess)
      alert("Sorry, Your guess is not correct !\n\n Hint: Your guess is alphabetically greater than mine\n\nPlease try again.")
  }while(!finished)  
  document.body.style.backgroundColor=user_guess;
  alert("Congratulations! You have guessed the color right!\n\nIt took you "+noGuess+" guesses to finish the game.\n\nYou can see the color in background. Enjoy!")
}