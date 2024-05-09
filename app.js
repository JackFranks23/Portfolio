

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    let quote = document.getElementById('quote')
    let rng = (Math.random() * 22 + 1).toFixed(0)
    // I would've made this a switch but it didn't work.
    if (rng == 1) {
        quote.innerHTML = ("All you had to do was follow the damn train.")
    } else if (rng == 2) {
        quote.innerHTML = ("Shoot for the stars, so if you fall you land on a cloud.")
    } else if (rng == 3) {
        quote.innerHTML = ("Every 60 seconds, a minute passes in Africa.")
    } else if (rng == 4) {
        quote.innerHTML = ("Live, Laugh, Love,")
    } else if (rng == 5) {
        quote.innerHTML = ("The universe, it sings to me!")
    } else if (rng == 6) {
        quote.innerHTML = ("Bravo Six, Going Dark.")
    } else if (rng == 7) {
        quote.innerHTML = ("What do the numbers mean!")
    } else if (rng == 8) {
        quote.innerHTML = ("This Is How You Died...")
    } else if (rng == 9) {
        quote.innerHTML = ("Bro Imagine")
    } else if (rng == 10) {
        quote.innerHTML = ("Okey Dokey.")
    } else if (rng == 11) {
        quote.innerHTML = ("War... War Never Changes.")
    } else if (rng == 12) {
        quote.innerHTML = ("Death Is A Preferable Alternative To Communism")
    } else if (rng == 13) {
        quote.innerHTML = ("Fate spins along as it should.")
    } else if (rng == 14) {
        quote.innerHTML = ("Don't act dumb.")
    } else if (rng == 15) {
        quote.innerHTML = ("Memes, the DNA of the soul.")
    } else if (rng == 16) {
        quote.innerHTML = ("Kept you waiting, huh?")
    } else if (rng == 17) {
        quote.innerHTML = ("Say my name.")
    } else if (rng == 18) {
        quote.innerHTML = ("I'm built different.")
    } else if (rng == 19) {
        quote.innerHTML = ("Why did I move here? I guess it was the weather.")
    } else if (rng == 20) {
        quote.innerHTML = ("I have done nothing but teleport bread for three days.")
    } else if (rng == 21) {
        quote.innerHTML = ("Don't forget the quarter.")
    } else if (rng == 22) {
        quote.innerHTML = ("One more big score.")
    } else if (rng == 23) {
        quote.innerHTML = ("Erectin' a Dispenser.")
    } else {
        quote.innerHTML = ("L")
    }

    let name = document.getElementById("name");
    let nametxt = "I'm Jack Franks";
    let name2 = document.getElementById("name2")
    let name2txt = "but you probably already know that, given you're here."

    function Typing(element, text, i = 0) {
        if (i === 0) {
            element.innerHTML = "";
        }
        element.textContent += text[i];

        if (i === text.length - 1) {
            return;
        }

        setTimeout(() => Typing(element, text, i + 1), 50);
    }
    setTimeout(() => {
        Typing(name, nametxt);
    }, 1500);
    setTimeout(() => {
        Typing(name2, name2txt);
    }, 2800);
    setTimeout(() => {
        document.getElementById("homep").style.opacity=1
        document.getElementById("himg").style.opacity=1
    }, 7000);
    

});