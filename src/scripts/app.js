import '../styles/main.css';
import '../styles/app.css';
import '../styles/app-responsive.css';
import '../components/card/card.css';
import '../components/modal/modal.css';

import Card from '../components/card/card.js';
import Gallery from '../components/gallery/gallery.js';
import AboutModal from '../components/modal/modal.js';

function App() {

    /*
    * I tried using dotenv-webpack to know how API keys
     * should be hidden but ofcourse, there is no backend
     * therefore, voila ! The GIPHY key !   
    */
    const initialGifsArr = ['lebron', 'lmao', 'what', 'cat', 'dog', 'philippines', 'coding', 'programming', 'idk man', 'amazing', 'love', 'sad', 'nerd', 'kpop', 'lols', 'france'];

    const api_key = process.env.GIPHY_API_KEY;
    const cont_left = document.getElementById('left');
    const cont_right = document.getElementById('right');
    const about = cont_left.querySelector('#about');
    const searchbar = cont_left.querySelector('.searchbar');
    const input_search = searchbar.querySelector('input');
    const btn_search = searchbar.querySelector(' #search');

    AboutModal.render(navbar);
    Gallery.render(cont_right);

    const chosen = initialGifsArr[Math.floor(Math.random() * initialGifsArr.length)];

    const query = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=14&q=${chosen}`

    FetchQuery(query);

    about.addEventListener('mouseenter', (e) => {
        e.stopPropagation();

        AboutModal.show();
    });

    about.addEventListener('mouseleave', (e) => {
        e.stopPropagation();

        AboutModal.show();
    });

    input_search.addEventListener('keydown', (e) => {
        e.stopPropagation();
        console.log(e.key);
        
        if (e.key === 'Enter') {
            console.log('hello');
            Search(input_search, initialGifsArr, api_key);
        };
    });
    
    btn_search.addEventListener('click', (e) => {
        e.stopPropagation();
        
        Search(input_search, initialGifsArr, api_key);
    });
};

function Search(inputEl, arr, key) {
    let query;
    const input = inputEl.value;

    if (input === '') {

        const chosen = arr[Math.floor(Math.random() * arr.length)];

        query = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=14&q=${chosen}`

    } else {

        const input = inputEl.value;
        arr.push(input)

        query = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=14&q=${input}`;

    };

    FetchQuery(query);
};

function FetchQuery(query) {
    fetch(query, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const data = response.data

            if (response.data.length === 0) {
                Gallery.placeholder(true); return;
            };

            Gallery.placeholder(false);
            Gallery.removeContent({ isReset: true });
            for (let item of data) {
                const gif = Card(item);

                Gallery.addContent(gif);
            };
        });
};

App();