let writePostBtn = document.querySelector("#write-post");
let showLastPostBtn = document.querySelector("#show-last-post");
let showAllPostsBtn = document.querySelector("#show-all-posts");

let sendPostInput = document.querySelector("#send-post-input");
let sendPostBtn = document.querySelector("#send-post");

let lastPostContainer = document.querySelector(".lastPost");
let allPostsContainer = document.querySelector(".posts-container");

let inputValue;
let posts = [];

sendPostInput.addEventListener("change", (e) => (inputValue = e.target.value));
sendPostBtn.addEventListener("click", () => sendPost());

showLastPostBtn.addEventListener("click", () => {
  showLastPost();
});
showAllPostsBtn.addEventListener("click", () => {
  showPosts();
});


function sendPost() {
  if (inputValue !== "") {
    fetch("https://my-json-server.typicode.com/obabiy/fakeDB/posts", {
      method: "POST",
      body: JSON.stringify({
        id: Math.round(Math.random() * 100),
        text: inputValue,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        posts.push(res);
      });
    inputValue = "";
    sendPostInput.value = "";
  }
}

const getPost = () => {};

const showLastPost = () => {
  if (posts[0]) {
    lastPostContainer.innerHTML = "";
    let lastPost = document.createElement("div");
    lastPost.className = "posts-elems";
    lastPost.textContent = posts[posts.length - 1].text;
    lastPostContainer.appendChild(lastPost);
  }
};

const showPosts = () => {
  allPostsContainer.innerHTML = "";
  posts.map((post) => {
    let el = document.createElement("div");
    el.className = "posts-elems";
    el.textContent = post.text;
    allPostsContainer.appendChild(el);
  });
};
