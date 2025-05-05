import '../styles/main.css';
import '../styles/app.css';

function App() {
    
    /*
    * I tried using dotenv-webpack to know how API keys
     * should be hidden but ofcourse, there is no backend
     * therefore, voila ! The GIPHY key !   
    */
    const api_key = process.env.GIPHY_API_KEY; 
    const body = document.body;
    const cont_left = document.getElementById('left');
    const cont_right = document.getElementById('right');

    const main = cont_right.querySelector('main#content'); 
    
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=5&q=lebron james`, { mode: 'cors' })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (response) {
    //         const data = response.data
            
    //         for (let item of data) {
    //             const url = item.images.original.url;
    //             const img = document.createElement('img');
                
    //             img.src = url;
    //             main.appendChild(img);
    //         };

    //     });
};

App();