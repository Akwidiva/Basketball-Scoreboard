let homecount = document.getElementById("home")
let guestcount = document.getElementById("guest")
let countguess = 0
let counthome = 0
function addone() {
    counthome += 1
    homecount.innerText = counthome 
}
function addtwo() {
    counthome += 2
    homecount.innerText = counthome 
}
function addthree() {
    counthome += 3
    homecount.innerText = counthome 
}
function addo() {
    countguess += 1
    guestcount.innerText =  countguess 
}
function addt() {
    countguess += 2
    guestcount.innerText =  countguess 
}
function addth() {
    countguess += 3
    guestcount.innerText =  countguess 
}
