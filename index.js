let homeScoreText = document.getElementById("home-score")
let guestScoreText = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

// home score
function homePlusOne() {
    homeScore += 1
    homeScoreText.textContent = homeScore
}

function homePlusTwo() {
    homeScore += 2
    homeScoreText.textContent = homeScore
}

function homePlusThree() {
    homeScore += 3
    homeScoreText.textContent = homeScore
}

// guest score
function guestPlusOne() {
    guestScore += 1
    guestScoreText.textContent = guestScore
}

function guestPlusTwo() {
    guestScore += 2
    guestScoreText.textContent = guestScore
}

function guestPlusThree() {
    guestScore += 3
    guestScoreText.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    
    homeScoreText.textContent = homeScore
    guestScoreText.textContent = guestScore
}