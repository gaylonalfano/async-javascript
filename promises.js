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

function createPost(post) {
  // return a new Promise instead of using callback
  // Two params: resolve, reject
  return new Promise((resolve, reject) => {
    // When resolve Promise successfully using resolve:
    setTimeout(() => {
      // Add the new post to posts
      posts.push(post);
      // Do some error checking
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong.");
      }
      console.log(`error is: ${error}`);
    }, 2000);
  });
}

// Call our createPost() function but this time it returns a Promise.
// So we can use .then() to specify which callback to use (i.e., getPosts)
// after the Promise is successfully resolved (i.e., resolve() was ran).
// createPost({ title: "Post Three", body: "This is post three." })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async/Await
// async function init() {
//   // Let's create a post and wait for it to be done using await
//   await createPost({ title: "Post Three", body: "This is post three." });

//   // After waiting for createPost to complete, then we can render all the posts
//   // using our getPosts() method.
//   getPosts();
// }

// init();

// Async/Await with fetch()
async function fetchUsers() {
  // Let's use fetch but store its Promise/Response into a variable
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // Rememeber with fetch() we have to get it in JSON format before we can get data
  const data = await res.json();

  console.log(data);
}

fetchUsers();

// There is also a Promise.all(). Let's make a bunch of resolved Promises
// const promise1 = Promise.resolve("Promise 1 is resolved!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye from promise3")
// );
// // Let's add in another promise by using fetch() to get users
// // https://jsonplaceholder.typicode.com/users
// const promise4 = fetch(
//   "https://jsonplaceholder.typicode.com/users"
// ).then((response) => response.json());

// // Now we can pass an Array of Promises to Promise.all()
// // This returns an Array of all the values
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
