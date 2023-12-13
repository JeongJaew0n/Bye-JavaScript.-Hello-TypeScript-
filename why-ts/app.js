// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {String} name
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @returns {Promise<User[]>}
 */
function fetchUser() {
  return axios.get(url);
}

// fetchUser().then(function(response) {
//   response.address.city;
// })

function startApp() {
  fetchUser() 
    .then(function (response) {
      // console.log(response);
      user = response.data;
      username.innerText = user[0].username;
      console.log(user);
    })
    .catch(function (error) {
      console.log(error);
    })
    
}

startApp();
