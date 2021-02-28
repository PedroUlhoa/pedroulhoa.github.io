// devto infos
let articles = [];
let devtoURL =
  "https://dev.to/api/articles?username=pedroulhoa&per_page=12&page=1";

// document ready
document.addEventListener("DOMContentLoaded", (event) => {
  getArticles();
});

function populateBlogDOM(response, posts) {
  posts.innerHTML =
    posts.innerHTML +
    `<a href="${response.url}" target="_blank">
    <p class="text-center">${response.title}</p>
    </a>`;
}

function getArticles() {
  let posts = document.getElementById("posts");
  let request = new XMLHttpRequest();
  request.open("GET", `${devtoURL}`);
  request.onload = function () {
    response = JSON.parse(request.response);
    if (response.length)
      document.getElementById("post-title").style.display = "block";
    response.forEach((response) => populateBlogDOM(response, posts));
  };
  request.send();
}
