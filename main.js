let form = document.getElementById("searchBar");
let input = document.getElementById("artistSearch");
let button = document.getElementById("searchButton");
let results = document.getElementById("results");
let searchValue;


form.addEventListener('submit', event => {
    event.preventDefault();
    searchValue = input.value.replaceAll(' ','+');
    getDataFromItunes();
} )




function getDataFromItunes(){    
    let url = `https://itunes.apple.com/search?term=${searchValue}&limit=24`
    console.log(url)

    fetch(url, {
        method:'GET',
        headers: {'Content-Type': 'application/json'},

    })
    .then( response => { return response.json() } )
    .then( json => {
        console.log(json);
        let finalHTML = '';

        if(json.resultCount === 0)
        {
            alert("No result found.");

        }else{

            json.results.forEach( song => {

                finalHTML += 
                `
                <div class="row ">
                    <div class="col s4 m4 l4">
                        <div class="card large">
                            <div class="card-image">
                            <img src=${song.artworkUrl100.replaceAll('100x100bb', '300x300bb')}>
                            <audio id=${song.trackId} src=${song.previewUrl} class="songAudio" preload="auto"></audio>
                            <button onclick="document.querySelectorAll('audio').forEach(el => el.pause()); document.getElementById(${song.trackId}).play();" class="btn-floating btn-large halfway-fab waves-effect waves-light red" type="submit"><i class="material-icons">play_arrow</i></button>
                            
                        </div>    
                                                            
                            <div class="card-content">
                                <span class="card-title">${song.trackName}</span>
                                
                                <p id="artistName">${song.artistName}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            `     
            
                
            })
            results.innerHTML = finalHTML;
        }
    })
    .catch( error => console.log(error))
}

