# iTunes API 

## ACTIONS:
    * Use *ARTIST DATA* to
    * ... DISPLAY *Song Titles*
    * Then [user] selects and plays song previews.

## STEPS
    1. Form
        a. `<input>` : Name of Band or Artist
            i. Check input.
        b. Submit button. (or press ENTER)
        c. API returns response
            d. Display a list of songs (without reloading page)
                i. MUST INCLUDE:
                    * Song Title
                ii. Optional include:
                    * Artist Name
                    * Album Title
                    * Album Image
                    * Release date

        d. User clicks song
            a. Song plays on `<audio>` tag

### KEEP IN MIND
    * Empty search results must be communicated.
    * "You should handle responses from the server that are not in the 200 range in your javascript and also in your UI (for instance, you can show an error message and ask the user to repeat their search)."
    * UX/UI is something to keep in mind


