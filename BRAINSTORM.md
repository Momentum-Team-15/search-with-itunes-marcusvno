## ACTIONS:
Use *ARTIST DATA* to DISPLAY *Song Titles*
Then [user] selects and plays song previews.

## STEPS
1. Form
    a. `<input>` : Name of Band or Artist
    b Check input.
    c. Submit button. (or press ENTER)
    d. API returns response
    e. Display a list of songs (without reloading page)
    f.User clicks song
        f1. Song plays on `<audio>` tag

## MUST INCLUDE:
1. Song Title
        
## Optional include:
Artist Name
Album Title
Album Image
Release date



### KEEP IN MIND
1. Empty search results must be communicated.

2. "You should handle responses from the server that are not in the 200 range in your javascript and also in your UI (for instance, you can show an error message and ask the user to repeat their search)."

3. UX/UI is something to keep in mind

### SETUP
1. `npm` installation of `live-server`. `npm start` to activate.

### DOCUMENTATION:
1. [iTunes API documentation](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1)
  - Read through the documentation before getting started. Everything you'll need to know is in there.
  - Use Insomnia to make requests to the API to test out the URLs you will need to construct and see data that is returned.

2. Playing a song preview
    - `<audio>` tag for this part - [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

