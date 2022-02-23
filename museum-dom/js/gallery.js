const gallery = document.querySelector('.gallery')
let images = [`assets/img/galery/galery1.jpg`, `assets/img/galery/galery2.jpg`,
    `assets/img/galery/galery3.jpg`, `assets/img/galery/galery4.jpg`,
    `assets/img/galery/galery5.jpg`, `assets/img/galery/galery6.jpg`,
    `assets/img/galery/galery7.jpg`, `assets/img/galery/galery8.jpg`,
    `assets/img/galery/galery9.jpg`
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

let random = shuffle(images)
console.log(random)

function randomize() {
    random.map((image) => {
        const img = `<img class="gallery-img" src=${image} 'alt="galery1">`;
        gallery.innerHTML += img;
    })
}

randomize()