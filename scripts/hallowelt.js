console.log("Hello World! This code runs immediately when the file is loaded.");
var damage_1 = new Audio('sounds/damage_sound_1.mp3');
damage_1.play();

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});