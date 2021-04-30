# Tiny PHP API 

Example on:

* how to use JS fetch() function
* how to enable CORS
* how to get POST data
* how to handle Query String
* how to return JSON 
* how to handle XHR returns

I'm using custom wrapped fetch function that returns:

* {success:"data"} normal controller return.
* {fail: "No db data found!"} controller failed. 
* {error: "404, Not Found"} XHR error.

### Getting started
Run in terminal:

        php -S localhost:8080        
        firefox localhost:8080 
     
### Licence
MIT
