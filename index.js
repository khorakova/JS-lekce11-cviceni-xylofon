console.log('Funguju')

let selectStone = (event) => {
    let header = document.querySelector("h1")
    let chosenStone = event.target.innerText;
    header.innerText = chosenStone;
    let zvuk = new Audio("tony/"+chosenStone+".mp3")
    zvuk.play()
}

let stones = document.querySelectorAll("button");
for (let i=0; i<stones.length; i++) {
    stones[i].addEventListener('click', selectStone)
}

let ovladaniPresKlavesnici = (event) => {
    let klavesa = event.code
    let cisloKlavesy = klavesa.charAt(5)
    if (cisloKlavesy >= 1 || cisloKlavesy <= 7) {
       let kamen = stones[cisloKlavesy-1].innerText
       let zvuk = new Audio("tony/"+kamen+".mp3")
        zvuk.play()
    }
}

document.addEventListener('keydown', ovladaniPresKlavesnici)


