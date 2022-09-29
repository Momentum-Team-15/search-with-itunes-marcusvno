
let url = 'https://itunes.apple.com/search?term=jack+johnson&entity=music&limit=25'


fetch(url, {
    method:'GET',
    headers: {'Content-Type': 'application/json'},

})
.then(function(response){
    return response.json();
})
.then(function(parsedResponse){
    for(let artwork of parsedResponse.data){
        console.log(`${artwork.title} by ${artwork.artist_title}`)
    }
})