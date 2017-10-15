const app = "I don't do much.";

// let xhr = new XMLHttpRequest()
//
// xhr.open("GET", 'https://api.github.com/repos/jquery/jquery/commits')
// xhr.responseType = "json";
//
// xhr.onload = function() {
//   console.log(xhr.response);
// }
//
// xhr.onerror = function() {
//   console.log("Booo")
// }
//
// xhr.send()

const token = "3a9efbcdf9d8aebf196dfb28e0671b293c3f81fa"
fetch('https://api.github.com/users/cpan001/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
.then(res => res.json())
.then(json => console.log(json))
