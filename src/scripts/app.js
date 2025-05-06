import '../styles/main.css';
import '../styles/app.css';
import '../components/card/card.css';

import Card from '../components/card/card.js';
import Gallery from '../components/gallery/gallery.js';

function App() {

    /*
    * I tried using dotenv-webpack to know how API keys
     * should be hidden but ofcourse, there is no backend
     * therefore, voila ! The GIPHY key !   
    */
    let query;
    const initialGifsArr = ['lebron', 'lmao', 'what', 'cat', 'dog', 'philippines', 'coding', 'programming', 'idk man', 'amazing', 'love', 'sad', 'nerd', 'kpop', 'lols', 'france'];

    const api_key = process.env.GIPHY_API_KEY;
    const cont_left = document.getElementById('left');
    const cont_right = document.getElementById('right');
    const searchbar = cont_left.querySelector('.searchbar');
    const input_search = searchbar.querySelector('input');
    const btn_search = searchbar.querySelector(' #search');

    Gallery.render(cont_right);

    // const chosen = initialGifsArr[Math.floor(Math.random() * initialGifsArr.length)];

    // query = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=10&q=${chosen}`

    // fetch(query, { mode: 'cors' })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (response) {
    //         const data = response.data

    //         if (response.data.length === 0) {
    //             Gallery.placeholder(true); return;
    //         };

    //         Gallery.placeholder(false);
    //         Gallery.removeContent({ isReset: true });
    //         for (let item of data) {
    //             const gif = Card(item);

    //             Gallery.addContent(gif);
    //         };
    //     });

    btn_search.addEventListener('click', (e) => {
        e.stopPropagation();

        const input = input_search.value;

        if (input === '') {

            const chosen = initialGifsArr[Math.floor(Math.random() * initialGifsArr.length)];

            query = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=10&q=${chosen}`

        } else {

            const input = input_search.value;
            initialGifsArr.push(input)

            query = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=10&q=${input}`;

        };

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
    });
};


App();