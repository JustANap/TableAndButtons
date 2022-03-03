function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
}

function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}


function blastOffTimer() {
    console.log("Countdown started");
    var currentTime = 50;
    for (var i = 0; i <= 50; i++) { // Set for loop to repeat 50 times
        setTimeout(function () {
            if (currentTime == 0) { // If countdown is finished:
                document.getElementById("blastOffText").innerHTML = "Blastoff!"; // Display blastoff
            } else if (currentTime <= 25) { // If countdown is halfway finished:
                document.getElementById("blastOffText").innerHTML = "Warning Less than ½ way to launch, time left = " + currentTime; // Warn that countdown is halfway, display time
            } else { // If neither of the previous two conditions are met:
                document.getElementById("blastOffText").innerHTML = currentTime; // Display time
            }
            currentTime = currentTime - 1; // Subtract time variable by 1
        }, 1000 * i); // Repeat once every 1000 milliseconds, or every second
    }
}


var numWins = 0;
var numLoss = 0;
var numTie = 0;
function playCraps() {
    var die1 = Math.ceil(6 * Math.random()); // Picks a random number between 0 and 1, multiplies by 6, and then rounds up to nearest integer
    var die2 = Math.ceil(6 * Math.random()); // Same as previous line
    var sum = die1 + die2; // Combines the two previous numbers into one total
    document.getElementById("die1Results").innerHTML = die1; // Writes the value of first number into HTML document
    document.getElementById("die2Results").innerHTML = die2; // Writes the value of second number into HTML document
    document.getElementById("sumResults").innerHTML = sum; // Writes the value of the total into HTML document
    if (sum == 7 || sum == 11) { // If the total is either 7 or 11, then player loses
        numLoss = numLoss + 1; // Update number of losses variable
        document.getElementById("crapsResults").innerHTML = "Craps, you lose"; // Inform player they lost
        document.getElementById("losses").innerHTML = numLoss // Updates the scoreboard with the new number of losses
    } else if (die1 == die2 && die1 % 2 == 0) { // If the first two numbers are the same and the total is an even number, then player wins
        numWins = numWins + 1; // Update number of wins variable
        document.getElementById("crapsResults").innerHTML = "Doubles, you win"; // Inform player they won
        document.getElementById("wins").innerHTML = numWins // Updates the scoreboard with the new number of wins
    } else { // If previous two conditions were not met, then player ties
        numTie = numTie + 1; // Update number of ties variable
        document.getElementById("crapsResults").innerHTML = "Tie, please try again"; // Inform player they tied
        document.getElementById("ties").innerHTML = numTie // Updates the scoreboard with the new number of ties
    }
}