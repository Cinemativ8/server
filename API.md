**Cinemativ8 API**
---
Base URL: `http://localhost:8080`

**1. Google OAuth**
----
  Sign-in via GoogleOAuth 2.0 and return json web token

* **URL**
  `/google-signin`
* **Method:**
  `POST`
* **Success Response:**
  * **Code:** 200 
  * **Content:** `{ jtwToken : String }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
  * **Content:** `{ error : "fail to generate token" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/google-signin",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  
**2. Find Nearby Cinemas**
----
  Return latitude and longitude of nearby cinemas from Google API Map

* **URL**
  `/cinemas`
* **Method:**
  `GET`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/cinemas",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
 
  
 **3. Youtube**
----
  Return youtube link based on movie title

* **URL**
  `/youtube/search`
* **Method:**
  `GET`
*  **URL Params**
   **Required:**
   * `data:{
       title: String
   }`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/youtube/search",
      type : "GET",
      data : {
          title: 'Royhan Si Juragan Tanah Kusir'
      }
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  
   **4. OMDB**
----
  Return movie detail from IMDB

* **URL**
  `/omdb/search`
* **Method:**
  `GET`
*  **URL Params**
   **Required:**
   * `data:{
       imdb: String
   }`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/youtube",
      type : "GET",
      dayta : {
          imdb: "12345"
      }
      success : function(r) {
        console.log(r);
      }
    });
  ```
  

   **5. Movies**
----
  Return movie data from Trakt based on various parameters
  
   **5.1 Trending**

* **URL**
  `/movies/trending`
* **Method:**
  `GET`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/trending",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
**5.2 Popular**

* **URL**
  `/movies/popular`
* **Method:**
  `GET`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/popular",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
 **5.3 Most Played**

* **URL**
  `/movies/most-played`
* **Method:**
  `GET`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/most-played",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
**5.4 Box Office**

* **URL**
  `/movies/boxoffice`
* **Method:**
  `GET`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/boxoffice",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
**5.5 Detail**

* **URL**
  `/movies/detail/:id`
* **Method:**
  `GET`
*  **URL Params**
   **Required:**
   * `id=string`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/detail/69",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
 **5.6 Stats**

* **URL**
  `/movies/stats/:id`
* **Method:**
  `GET`
*  **URL Params**
   **Required:**
   * `id=string`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/stats/69",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
 **5.7 Rating**

* **URL**
  `/movies/rating/:id`
* **Method:**
  `GET`
*  **URL Params**
   **Required:**
   * `id=string`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/rating/69",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
**5.8 Related**

* **URL**
  `/movies/related/:id`
* **Method:**
  `GET`
*  **URL Params**
   **Required:**
   * `id=string`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/related/69",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
 **5.9 Search**

* **URL**
  `/movies/search/:id`
* **Method:**
  `POST`
*  **URL Params**
   **Required:**
   * `data:{
       search: "string"
   }`
* **Success Response:**
  * **Code:** 200 
  *  **Content:** `{ json }`
* **Error Response:**
  * **Code:** 500 Internal Server Error 
    **Content:** `{ error : "fail to fetch data from 3rd party API" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/movies/search",
      type : "POST",
      data: {
          search: "Royhan Si Juragan Tanah Kusir"
      }
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  
  