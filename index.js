/*Challenge 1: The Traffic Light Simulator

Goal: Write a conditional block that checks the color of a traffic light and prints the driver's action.
• Create a variable named lightColor and initialize it to "green", "yellow", or "red".
• If the light is "green", log "Go!" to the console.
• If the light is "yellow", log "Slow down!" to the console.
• If the light is "red", log "Stop!" to the console.
• For any other color, log "Invalid light color!".*/

const driver = "Nancy";
let lightColor = "green";
if (lightColor !== "green" && lightColor !== "yellow" && lightColor !== "red") {
  console.log("Invalid color");
} else if (lightColor === "green") {
  console.log(`${driver} can go!`);
} else if (lightColor === "yellow") {
  console.log(`${driver} needs to slow down!`);
} else {
  console.log(`${driver} shoud stop!`);
}

/*Challenge 2: Exam Score Evaluator

Goal: Check a student's numerical score and print whether they passed or failed, along with their status.
• Create a variable named score and assign it a number between 0 and 100.
• If the score is 90 or above, log "Passed with Honors!".
• If the score is between 60 and 89 (inclusive), log "Passed!".
• If the score is below 60, log "Failed. Try again!".*/

const student = "Frank";
const score = 73;
if (score >= 90) {
  console.log(`${student} passed with honors!`);
} else if (score >= 60 && score <= 89) {
  console.log(`${student} passed!`);
} else {
  console.log(`${student} failed! Please try again.`);
}

/*Challenge 3: Website Theme Picker

Goal: Determine which color palette to display based on a user's choice of site theme.
• Create a variable named userPreference and initialize it to "dark", "light", or "retro".
• Create a variable named backgroundColor but don't give it an initial value yet.
• If userPreference is "dark", assign "black" to backgroundColor.
• If userPreference is "light", assign "white" to backgroundColor.
• If userPreference is "retro", assign "sepia" to backgroundColor.
• If it matches none of these, assign "gray" to backgroundColor.
• Log backgroundColor to the console at the very end.*/

let userPreference = "red";
let backgroundColor;
if (userPreference === "dark") {
  backgroundColor = "black";
} else if (userPreference === "light") {
  backgroundColor = "white";
} else if (userPreference === "retro") {
  backgroundColor = "sepia";
} else {
  backgroundColor = "gray";
}
console.log(`${backgroundColor}`);

/*Challenge 4: Concert Ticket & VIP Access Gatekeeper

Goal: Check a concertgoer's age and pass status to decide whether they can enter the venue and if they get VIP lounge access.
• Create a variable named age and set it to a number (for example, 22).
• Create a boolean variable named hasVIPPass and set it to true or false.
• Rule 1: If the person is 21 or older AND has a VIP pass (hasVIPPass is true), log "Welcome! Enjoy VIP lounge access.".
• Rule 2: If the person is 18 or older (and didn't qualify for VIP access above), log "Welcome! General admission granted.".
• Rule 3: If the person is under 18, log "Sorry, you must be at least 18 to enter.".*/

const ageConcert = 16;
const hasVIPPass = true;
if (ageConcert >= 21 && hasVIPPass) {
  console.log(
    `You are ${ageConcert} years of age. You are eligible for VIP seating.`,
  );
} else if (ageConcert >= 18) {
  console.log(
    `You are ${ageConcert} years of age. Welcome to genreral admission`,
  );
} else {
  console.log(`We are sorry. You must be at least 18 years of age to enter`);
}

/*Challenge 5: Online Store Free Shipping & Account Check

Goal: Check a shopper's cart total, membership status, and account lock status to determine their shipping cost.
• Create a variable named cartTotal and set it to a number (for example, 35).
• Create a boolean variable named isMember and set it to true or false.
• Create a boolean variable named isAccountLocked and set it to true or false.
• Rule 1: If the account is locked (isAccountLocked is true), log "Account locked. Please contact support.".
• Rule 2: Otherwise, if the shopper is a member (isMember is true) OR their cartTotal is 50 or more, log "You qualify for FREE shipping!".
• Rule 3: In all other cases, log "Shipping is $5.99.".*/

const shopper = "Bob";
const cartTotal = 63;
const isMember = false;
const isAccountLocked = false;
if (isAccountLocked === true) {
  console.log(`Account locked. Please contact support.`);
} else if (isMember === true || cartTotal >= 50) {
  console.log(`Great news ${shopper}! You qualify for free shipping!`);
} else {
  console.log("Shipping is $5.99.");
}

/*Challenge 6: Game Matchmaking & Ranked Queue Gatekeeper

Goal: Check a player's level, connection status, and penalty status to see if they can enter a Ranked match.
• Create a variable named playerLevel and set it to a number (for example, 15).
• Create a boolean variable named isOnline and set it to true or false.
• Create a boolean variable named hasLeavePenalty and set it to true or false.
• Create a boolean variable named hasSeasonPass and set it to true or false.
• Rule 1: If the player is NOT online (isOnline is false), log "Cannot queue: You are offline.".
• Rule 2: Otherwise, if the player has a leave penalty (hasLeavePenalty is true), log "Cannot queue: Active penalty timer.".
• Rule 3: Otherwise, if the player's playerLevel is 20 or higher OR they own a season pass (hasSeasonPass is true), log "Searching for Ranked match...".
• Rule 4: In all other cases, log "Reach level 20 or get a Season Pass to unlock Ranked.".*/

const playerHandle = "proofsinpuddin";
const playerLevel = 19;
const isOnline = true;
const hasLeavePenalty = false;
const hasSeasonPass = false;
if (isOnline === false) {
  console.log(
    `Sorry ${playerHandle}! You cannot queue cause you are offline. Check your connection and log in to try again.`,
  );
} else if (hasLeavePenalty === true) {
  console.log(
    `Sorry ${playerHandle}, looks like you have an active penalty timer.`,
  );
} else if (playerLevel >= 20 || hasSeasonPass === true) {
  console.log(`Searching for ranked match...`);
} else {
  console.log(`Reach level 20 or get the Season Pass to unlock Ranked play.`);
}

/*Challenge 7: Smart Home Thermostat Controller

Goal: Check the indoor temperature, whether anyone is home, and whether eco-mode is turned on to decide what the AC should do.
• Create a variable named currentTemp and set it to a number (for example, 78).
• Create a boolean variable named isSomeoneHome and set it to true or false.
• Create a boolean variable named isEcoMode and set it to true or false.
• Rule 1: If nobody is home (isSomeoneHome is false) AND currentTemp is 85 or lower, log "System standby: House is empty.".
• Rule 2: Otherwise, if currentTemp is above 75 AND eco-mode is NOT on (isEcoMode is false), log "Turning on AC to cool down.".
• Rule 3: Otherwise, if currentTemp is above 80 AND eco-mode is on (isEcoMode is true), log "Eco-mode override: Turning on AC.".
• Rule 4: In all other cases, log "Temperature is comfortable. AC remains off.". */

const currentTemp = 75;
const isSomeoneHome = true;
const isEcoMode = true;
if (isSomeoneHome === false && currentTemp <= 85) {
  console.log(`System Standby: House is empty.`);
} else if (currentTemp > 75 && isEcoMode === false) {
  console.log(`Turning on AC to cool down.`);
} else if (currentTemp > 80 && isEcoMode === true) {
  console.log(`Eco-Mode override: Turning on AC.`);
} else {
  console.log(`Temperature is comfortable. AC remains off.`);
}

/*Challenge 8: Movie Theater Ticket Discount & Admission

Goal: Check a moviegoer's ticket status, age, student status, and movie rating to decide if they get into the theater and whether they get a discount.
• Create a boolean variable named hasTicket and set it to true or false.
• Create a variable named age and set it to a number (for example, 16).
• Create a boolean variable named isStudent and set it to true or false.
• Create a boolean variable named isRatedR and set it to true or false.
• Rule 1: If the person does NOT have a ticket (hasTicket is false), log "Please purchase a ticket at the box office.".
• Rule 2: Otherwise, if the movie is Rated R (isRatedR is true) AND the person is under 17, log "Sorry, you must be 17 or older for a Rated R movie.".
• Rule 3: Otherwise, if the person is a student (isStudent is true) OR their age is 65 or older, log "Enjoy the movie with your discounted ticket!".
• Rule 4: In all other cases, log "Enjoy the movie!".*/

const hasTicket = true;
const ageMovie = 9;
const isStudent = true;
const isRatedR = true;
if (hasTicket === false) {
  console.log(`Please purchase a ticket at the box office or online.`);
} else if (isRatedR === true && ageMovie < 17) {
  console.log(`Sorry, you must be 17 or older for a Rated R movie.`);
} else if (isStudent === true || ageMovie >= 65) {
  console.log(`Enjoy the movie with your discounted tickets!`);
} else {
  console.log(`Enjoy the movie!`);
}

/*Challenge 9: Fantasy Football Roster Move Validator

Goal: Check whether a team manager can pick up a free agent before kickoff based on their roster spots, injured reserve (IR) status, and game lock status.
• Create a boolean variable named hasOpenRosterSpot and set it to true or false.
• Create a boolean variable named hasIREligiblePlayer and set it to true or false.
• Create a boolean variable named isGameLocked and set it to true or false.
• Create a variable named transactionStatus without an initial value (let transactionStatus;).
• Rule 1: If the player's game is already locked (isGameLocked is true), set transactionStatus to "Move blocked: Player's game has already started.".
• Rule 2: Otherwise, if the manager has an open roster spot (hasOpenRosterSpot is true) OR has an IR-eligible player they can slide to IR (hasIREligiblePlayer is true), set transactionStatus to "Roster move approved!".
• Rule 3: In all other cases, set transactionStatus to "Move blocked: Drop a player to clear a roster spot.".
• Log transactionStatus to the console at the very end.
(Bonus stretch: Can you think of how to combine Rules 1 and 2 into a single condition using !isGameLocked && (...) if you wanted to check approval first?)*/

const hasOpenRosterSpot = true;
const hasIREligiblePlayer = false;
const isGameLocked = false;
let transactionStatus;
if (isGameLocked === true) {
  transactionStatus = "Move blocked. Player's game has already started.";
} else if (hasOpenRosterSpot === true || hasIREligiblePlayer === true) {
  transactionStatus = "Roster moved approved!";
} else {
  transactionStatus = "Move blocked: Drop a player to clear a roster spot";
}
console.log(transactionStatus);

/*Challenge 10: 3D Print Job Readiness & Safety Check

Goal: Check a 3D printer's bed temperature, filament status, and enclosure settings to decide if a print job can start safely.
• Create a boolean variable named hasFilamentLoaded and set it to true or false.
• Create a boolean variable named isBedLeveled and set it to true or false.
• Create a variable named filamentType and set it to "PLA" or "ABS".
• Create a boolean variable named isEnclosureClosed and set it to true or false.
• Create a variable named printerMessage without an initial value (let printerMessage;).
• Rule 1: If filament is NOT loaded (hasFilamentLoaded is false) OR the bed is NOT leveled (isBedLeveled is false), set printerMessage to "Print aborted: Check filament and bed level.".
• Rule 2: Otherwise, if filamentType is "PLA" OR (filamentType is "ABS" AND isEnclosureClosed is true), set printerMessage to "Starting print job...".
• Rule 3: In all other cases (meaning filamentType is "ABS" while the enclosure is open), set printerMessage to "Warning: Close enclosure before printing ABS.".
• Log printerMessage to the console at the very end.*/

const printerName = "Centauri Carbon";
const hasFilamentLoaded = true;
const isBedLeveled = true;
const filamentType = "ABS";
const isEnclosureClosed = false;
let printerMessage;
if (hasFilamentLoaded === false || isBedLeveled === false) {
  printerMessage = `Print aborted: Check filament and bed level.`;
} else if (
  filamentType === "PLA" ||
  (filamentType === "ABS" && isEnclosureClosed === true)
) {
  printerMessage = `Starting print job on your ${printerName}.`;
} else {
  printerMessage = `Warning: Close enclosure before printing ABS.`;
}
console.log(printerMessage);
