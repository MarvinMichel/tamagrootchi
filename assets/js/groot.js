//Audiobestanden
const song = new Audio('./assets/sfx/mrBlueSky.mp3');
const greeting = new Audio('./assets/sfx/iAmGroot.mp3');

//HTML elementen die meerdere keren worden gebruikt
const animContainer = $('.animContainer').get(0);
const fetchContainer = $('.fetchContainer').get(0);
const buttons = $('button');

//Datum en uren van het moment
const today = new Date();
const hours = today.getHours();

//Houd bij hoevaak de 'Dance' knop is ingedrukt
let btnPress = 0;

//Veranderen van achtergrond op basis van tijd
if (hours >= 21 || hours <= 5) {
    $('body').addClass('nightTime');
}

// Array met data objecten voor animaties
const animData = [{
    title: 'Grow',
    container: animContainer,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: './assets/js/grow.json'
}, {
    title: 'Shrink',
    container: animContainer,
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: './assets/js/shrink.json'
}, {
    title: 'Dance',
    container: animContainer,
    renderer: 'svg',
    autoplay: false,
    loop: 27,
    path: './assets/js/dance.json'
}];

//Laat 'Groot' groeien
const growGroot = () => {
    groot.destroy();
    groot = bodymovin.loadAnimation(animData[0]);
    groot.play();
    btnEnable();
}

//Laat 'Groot' gedag zeggen
const iAmGroot = () => {
    greeting.play();
}

//Laat 'Groot' krimpen
const shrinkGroot = () => {
    song.pause();
    song.currentTime = 0;
    groot.destroy();
    groot = bodymovin.loadAnimation(animData[1]);
    groot.play();
    btnEnable();
}

//Laat 'Groot' dansen
const danceGroot = () => {
    if (btnPress % 2 === 0 || btnPress === 0) {
        song.play();
        groot.destroy();
        groot = bodymovin.loadAnimation(animData[2]);
        groot.play();
    } else {
        song.pause();
        groot.pause();
    }
    btnPress++;
}

//Haal informatie over 'Groot' binnen via Wikipedia en dump het in een section
// const fetchGroot = () => {
//     const url = 'https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Groot&limit=5"';
//     fetch(url)
//         .then((res) => {
//             return res.json();
//         }).then((data) => {
//             document.querySelector('h2').textContent = 'About Groot';
//             document.querySelector('p').textContent = data[2][0];
//             $(fetchContainer).css('background-color', 'rgba(30, 27, 56, 0.45)');
//         })
//         .catch((error) => {
//             console.log('Er ging iets mis met de fetch...');
//         });
// }

//Schakel knoppen in of uit
const btnEnable = () => {
    for (let el of buttons) {
        el.disabled ? el.disabled = false : el.disabled = true;
    }
}

//Geeft een vaste waarde aan de container, zodat het begin stadium een boompje is
let groot = bodymovin.loadAnimation(animData[0]);

//Events
document.querySelector('header img').addEventListener('dblclick', iAmGroot);
// animContainer.addEventListener('click', fetchGroot);
buttons[0].addEventListener('click', growGroot)
buttons[1].addEventListener('click', shrinkGroot)
buttons[2].addEventListener('click', danceGroot)