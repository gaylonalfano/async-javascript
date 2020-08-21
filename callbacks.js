// @ts-nocheck
// Going to mimic getting blog posts on a server, getting them and
// creating a blog post.
const posts = [
  { title: "Post One", body: "This is post one." },
  { title: "Post Two", body: "This is post two." },
];

function getPosts() {
  // Use setTimeout to mimic a server
  setTimeout(() => {
    // Let's retrieve our posts and put on our index.html
    let output = "";
    // loop through posts
    posts.forEach((post, index) => {
      // Append to output
      output += `<li>${index}: ${post.title}</li>`;
    });
    // Next we insert into the document body
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    // Add the new post to posts
    posts.push(post);
    // We add a callback() after our post is added
    // We basically want our callback to be the getPosts()
    // to update the DOM/page.
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three." }, getPosts);
