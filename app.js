document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    let quote = document.getElementById('quote')
    // let rng = (Math.random() * 19 + 1).toFixed(0)
    // quoting this out for now because I only made 1 quote work.
    let rng = 2
    // I would've made this a switch but it didn't work.
    if (rng == 1) {
        quote.innerHTML = ("You rolled a Nat 1")
    }else if (rng == 2) {
        quote.innerHTML = ("Shoot for the stars, so if you fall you land on a cloud.")
    }else if (rng == 3) {
        quote.innerHTML = ("wow its 3")
    }else if (rng == 4) {
        quote.innerHTML = ("wow its 4")
    }else if (rng == 5) {
        quote.innerHTML = ("wow its 5")
    }else if (rng == 6) {
        quote.innerHTML = ("wow its 6")
    }else if (rng == 7) {
        quote.innerHTML = ("wow its 7")
    }else if (rng == 8) {
        quote.innerHTML = ("wow its 8")
    }else if (rng == 9) {
        quote.innerHTML = ("wow its 9")
    }else if (rng == 10) {
        quote.innerHTML = ("wow its 10")
    }else if (rng == 11) {
        quote.innerHTML = ("wow its 11")
    }else if (rng == 12) {
        quote.innerHTML = ("wow its 12")
    }else if (rng == 13) {
        quote.innerHTML = ("wow its 13")
    }else if (rng == 14) {
        quote.innerHTML = ("wow its 14")
    }else if (rng == 15) {
        quote.innerHTML = ("wow its 15")
    }else if (rng == 16) {
        quote.innerHTML = ("wow its 16")
    }else if (rng == 17) {
        quote.innerHTML = ("wow its 17")
    }else if (rng == 18) {
        quote.innerHTML = ("wow its 18")
    }else if (rng == 19) {
        quote.innerHTML = ("wow its 19")
    }else if (rng == 20) {
        quote.innerHTML = ("You rolled a Nat 20")
    }else {
        quote.innerHTML = ("L")
    }


  });