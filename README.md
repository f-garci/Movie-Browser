# Movie Browser

This movie browser allows users to search a key term that will return a list of movies, if there are any movies with said keyword.

# Usage

At startup, the application has by default a list of Star Wars movies. The user is allowed to search for a movie via the search text input box. Upon returning movies related to the key term(s) the user can scroll through the list. A total of 10 movies appear per page. The user is also allowed to switch between result pages via the next and previous buttons. If the user finds their desired movie, they can click on the movie card to find out more about it. Not all movies have their data available. Some fields may be blank or may be filled with N/A. The user can go back to the list via the arrow on top or via pressing the back arrow on the bottom (Android).

# Known issues/bugs

-   Pressing search while text in input box is not changed may lead to an empty list. The only way to display movies again is to search another key term and then search again the previous term.
-   Sometimes the app crashes due to duplicate keys. This was seen mainly in testing. During production testing no crashes have occured.

# Solution link

https://expo.io/@the_trickster/projects/MovieBrowser
