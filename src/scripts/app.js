
const App = function() {
    
    const img = document.querySelector('img');
    
    /*
     * I tried using dotenv-webpack to know how API keys
     * should be hidden but ofcourse, there is no backend
     * therefore, voila ! The GIPHY key !   
    */
    const api_key = process.env.GIPHY_API_KEY; 
    
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=SEARCH_STRING`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            img.src = response.data.images.original.url;
        });

}();

App();