let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let resetHomeEl = document.getElementById("reset-home-score")
let resetGuestEl = document.getElementById("reset-guest-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function resetHomeScore() {
    homeScoreEl.textContent = 0
    homeScore = 0
}

// Guest
let guestScore = 0
function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function resetGuestScore() {
    guestScoreEl.textContent = 0
    guestScore = 0
}
