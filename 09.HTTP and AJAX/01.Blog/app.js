function attachEvents() {
  const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
  const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";

  const btnLoadPosts = document.getElementById("btnLoadPosts");
  const viewPostBtn = document.getElementById("btnViewPost");
  const postsSelect = document.getElementById("posts");

  btnLoadPosts.addEventListener("click", getPosts);
  viewPostBtn.addEventListener("click", viewPosts);

  let allPosts = {};

  function getPosts() {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((data) => {
        postsSelect.innerHTML = "";
        allPosts = data;

        for (const postId in data) {
          const post = data[postId];
          const option = document.createElement("option");
          option.value = postId;
          option.textContent = post.title.toUpperCase();
          postsSelect.appendChild(option);
        }
      })
      .catch((error) => console.error(error));
  }

  function viewPosts() {
    const selectedPostId = postsSelect.value;

    fetch(commentsUrl)
      .then((response) => response.json())
      .then((comments) => {
        const commentsForSelectedPost = Object.values(comments).filter(
          (comment) => comment.postId === selectedPostId
        );
        let currentPost = allPosts[selectedPostId];

        const postTitleElement = document.getElementById("post-title");
        postTitleElement.textContent = currentPost.title;

        const postBodyElement = document.getElementById("post-body");
        postBodyElement.textContent = currentPost.body;

        const postComments = document.getElementById("post-comments");
        postComments.innerHTML = "";

        for (index in commentsForSelectedPost) {
          let li = document.createElement("li");
          li.textContent = commentsForSelectedPost[index].text;
          postComments.appendChild(li);
        }
      });
  }
}

attachEvents();
