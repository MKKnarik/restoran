const nameText = [
    {
        img: 'img/xinkali.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Лучшие хинкали',
    },
    {
        img: 'img/xachapuri.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Легендарные хачапури',
    },
    {
        img: 'img/salat.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Лучшие салаты',
    },
    {
        img: 'img/vegan.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Лучшие веган',

    },
    {
        img: 'img/tortik.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Легендарные хичачипури',

    },
    {
        img: 'img/sup.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Где поесть рамен',
    },
    {
        img: 'img/sup.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Где поесть рамен',
    },
    {
        img: 'img/sup.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Где поесть рамен',
    },
    {
        img: 'img/sup.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Где поесть рамен',
    },
    {
        img: 'img/sup.png',
        imgs: 'img/astxer.png',
        acenka: 'img/acenka.png',
        text: 'Где поесть рамен',
    },

]
const slider = document.querySelector('.slider');
nameText.map((array) => {
    const div = document.createElement('div');
    div.className = 'box1'
    const box = document.createElement('div');
    box.className = 'box';
    const nkar1 = document.createElement('img');
    nkar1.src = array.img;
    const nkar2 = document.createElement('img');
    nkar2.src = array.imgs;
    const nkar3 = document.createElement('img')
    nkar3.src = array.acenka;
    const p = document.createElement('p');
    p.textContent = array.text;

    slider.appendChild(div);
    div.appendChild(nkar1);
    div.appendChild(box);
    box.appendChild(nkar2);
    box.appendChild(nkar3);
    div.appendChild(p);


})

const nameText1 = [
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64 (1).png',
        anun: 'Steak It Easy ',
        background: 'img/nkar1.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64 (1).png',
        anun: 'Steak It Easy ',
        background: 'img/nkar2.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64 (1).png',
        anun: 'Cafe Daphna Batumi ',
        background: 'img/nkar3.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64.png',
        anun: 'Пей да гуляй',
        background: 'img/nkar4.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64 (1).png',
        anun: 'Четыре сыра',
        background: 'img/nkar5.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64.png',
        anun: 'Пей да гуляй',
        background: 'img/nkar6.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64.png',
        anun: 'Сердце Батуми',
        background: 'img/nkar7.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64.png',
        anun: 'Cafe Daphna Batumi ',
        background: 'img/nkar8.jpg',
    },
    {
        otziv: '150 отзывов',
        astxer: 'img/astxer.png',
        ikonka: 'img/Frame 64 (2).png',
        anun: 'Steak It Easy ',
        background: 'img/nkar9.jpg',
    },];
const restoranner = document.querySelector('.restoranner');
nameText1.map((array) => {
    const div = document.createElement('div');
    div.className = 'restoran';

    div.style.backgroundImage = `url(${array.background})`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';

    const arkx = document.createElement('div');
    arkx.className = 'arkx';

    const arkx1 = document.createElement('div');
    arkx1.className = 'arkx1';

    const h1 = document.createElement('h1');
    h1.textContent = array.otziv;
    const nkar1 = document.createElement('img');
    nkar1.src = array.astxer;
    const nkar2 = document.createElement('img');
    nkar2.src = array.ikonka;

    const p = document.createElement('p');
    p.textContent = array.anun;


    restoranner.appendChild(div);
    arkx1.appendChild(h1);
    arkx1.appendChild(arkx);
    div.appendChild(arkx1);
    arkx.appendChild(nkar1);
    arkx.appendChild(nkar2);
    div.appendChild(p);


})

