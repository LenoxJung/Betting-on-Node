var prompt = require('prompt-sync')();
var colors = require('colors');
var bankroll = 100;
var answer;
var wins = 0;
while (answer != 'n') {
  var random = Math.floor((Math.random()*10)+1);
  var bet = prompt('Place a bet between $5 and $10: ');
  var guess = prompt('Guess a number between 1 and 10: ');
  if (guess == random) {
    bankroll += parseInt(bet);
    wins ++;
    console.log(colors.bold("Correct! Your bankroll is now $" + bankroll + " and your number of wins is: " + wins));
  }
  else if (guess == random + 1 || guess == random - 1) {
    console.log(colors.green("So close! Your bankroll is still $" + bankroll + " the correct answer was " + random));
  }
  else {
    bankroll -= bet;
    console.log(colors.red("Wrong!, your bankroll is now $" + bankroll + " the correct answer was " + random));
  }
  if (bankroll <= 0){
    answer = prompt('replay? [Y/n]: ');
    if (answer == 'Y'){
      bankroll = 100;
      wins = 0;
    }
  }
}