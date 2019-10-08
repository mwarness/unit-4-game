

// Your Mans Variables
var mans = {
    fuego:
    {
      name: "Fuego",
      value: 0
    },
    nick:
    {
      name: "Nick",
      value: 0
    },
    ben:
    {
      name: "Ben",
      value: 0
    },
    brad:
    {
      name: "Brad",
      value: 0
    }
  };
  
//-------------------- your score vs top score----------------------
  var yourScore = 0;
  var topScore = 0;
  
  // -----------------using it  and losing it---------------------
  var winCount = 0;
  var lossCount = 0;
  
  
  // FUNCTIONS
  // =================================================================
  
  // ---------------------functions for random numbers-------------------------
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Starts the Game (and restarts the game)
  var startGame = function() {
  
    // Reset the Current Score
    yourScore = 0;
  
    // Set a new Target Score (between 19 and 120)
    topScore = getRandom(19, 120);
  
    // Set different values for each of the manss (between 1 and 12)
    mans.fuego.value = getRandom(1, 12);
    mans.nick.value = getRandom(1, 12);
    mans.ben.value = getRandom(1, 12);
    mans.brad.value = getRandom(1, 12);
  
    // Change the HTML to reflect all of these changes
    $("#yourScore").text(yourScore);
    $("#topScore").text(topScore);
  
  
    // Testing Console
    console.log("-----------------------------------");
    console.log("Target Score: " + topScore);
    console.log("Fuego: " + mans.fuego.value + " | Nick: " + mans.nick.value + " | Ben: " + mans.ben.value +
      " | Brad: " + mans.brad.value);
    console.log("-----------------------------------");
  };
  
  // Check if User Won or Lost and Reset the Game
  var checkWin = function() {
  
    // Check if yourScore is larger than topScore
    if (yourScore > topScore) {
      alert("You didnt use it, so you lose it! (aka you lost hahaha)");
      console.log("You Lost");
  
      // Add to Loss Counter
      lossCount++;
  
      // Change Loss Count HTML
      $("#dontUseItLoseIt").text(lossCount);
  
      // Restart the game
      startGame();
    }
  
    else if (yourScore === topScore) {
      alert("You done get it! (aka you win)");
      console.log("You Won!");
  
      // Add to the Win Counter
      winCount++;
  
      // Change Win Count HTML
      $("#usingIt").text(winCount);
  
      // Restart the game
      startGame();
    }
  
  };
  
  // Respond to clicks on the manss
  var addValues = function(clickedmans) {
  
    // Change yourScore
    yourScore += clickedmans.value;
  
    // Change the HTML to reflect changes in yourScore
    $("#yourScore").text(yourScore);
  
    // Call the checkWin Function
    checkWin();
  
    // Testing Console
    console.log("Your Score: " + yourScore);
  };
  
  // MAIN PROCESS
  // =================================================================
  
  // Starts the Game the First Time.
  startGame();
  
  $("#fuego").click(function() {
    addValues(mans.fuego);
  });
  
  $("#ben").click(function() {
    addValues(mans.ben);
  });
  
  $("#nick").click(function() {
    addValues(mans.nick);
  });
  
  $("#brad").click(function() {
    addValues(mans.brad);
  });