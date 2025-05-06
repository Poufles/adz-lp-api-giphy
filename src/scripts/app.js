import '../styles/main.css';
import '../styles/app.css';
import '../components/card/card.css';

import Card from '../components/card/card.js';

function App() {

    /*
    * I tried using dotenv-webpack to know how API keys
     * should be hidden but ofcourse, there is no backend
     * therefore, voila ! The GIPHY key !   
    */
    const api_key = process.env.GIPHY_API_KEY;
    const cont_left = document.getElementById('left');
    const cont_right = document.getElementById('right');

    const main = cont_right.querySelector('main#content');


    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=6&q=lebron james`, { mode: 'cors' })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //         const data = response.data
    //         console.log(response);
    //         console.log(data);

    //         for (let item of data) {
    //             const gif = Card(item);
    //             gif.render(main);
    //         };

    //     });
};

App();