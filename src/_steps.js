/** 
 * steps to use firebase 
 * 1. create a project on console.firebse.google.com
 * 2. install firebase
 * 3. register firebase in web app
 * 4. copy firebase init with config from firebase project setting into a file firebase.init.js
 * 5. export deafult app
 * 6. import get auth from firebase/auth and create const auth =getAuth(app) in App.js
 * 7. import app firebase init.js into your app.js 
 * 9. turn on google authentication(firebase >authentication> enable google sign in)
 * 10. create google provider
 * 11. use signWithPopup and pass auth and provider
 * 12. handle .then (if sucessful) and catch error (if error)
 */