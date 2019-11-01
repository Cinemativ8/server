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
  Return latitude and longitude of nearby cinemas

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
  description

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
          title: 'The Dark Knight'
      }
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  
   **4. OMDB**
----
  description

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
  
  
  
  