var player = 0;
var computer = 0;
for(i = 0; i < 10; i++) {

  var userChoice = prompt("what's it gonna be ... rock, paper, or scissors?")
  var computerChoice = Math.random()

  if (computerChoice < 0.33) {
    computerChoice = "paper"

  } else if (computerChoice <= 0.66) {
    computerChoice = "scissors"

  } else if (computerChoice <= 1) {
    computerChoice = "rock"
  }


  var compare = function(choice1 ,choice2){
    // if both players choose the same, use === for strict analysis
    if(choice1 === choice2){
      return  alert("It's a tie!");
    }

    // if user is rock
    if(choice1 === "rock") {
      if(choice2 === "scissors") {
      alert("You win");
      return player+=1;
      } else {
      alert("You Lose");
      return computer+=1;

      }
    }

    // if user is paper
    if(choice1 === "paper") {
      if(choice2 === "rock") {
        alert("You win");
        return player+=1;
      } else {
        alert("You Lose");
        return computer+=1;

        }
    }

    // if user is scissors
    if(choice1 === "scissors") {
      if(choice2 === "paper") {
        alert("You win")
        return player+=1;
      } else {
        alert("You Lose");
        return computer+=1;


      }
    }
}
//this compares the 2 results and gives out an alert to say whos won
compare(userChoice,computerChoice);

// score

}
