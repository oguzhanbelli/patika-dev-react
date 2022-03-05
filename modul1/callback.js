// setTimeout(() => {
//     console.log("Deneme")

// }, 1000);

// setInterval(() => {
//     console.log("Merhaba ben her saniye çalışacağım")
// }, 100);

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("Hello");
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users yüklendi", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json()   )
//       .then((posts) => {
//         console.log("Post 1 yüklendi", posts)
//         fetch("https://jsonplaceholder.typicode.com/posts/2").then(data => data.json()).then(posts => {
//             console.log("Post 2 Yüklendi",posts);
//         })
//       });
//   });

// async function getData(){
// const  data =  await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
// console.log("Data",data);
// const  post1 =  await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
// console.log("Post1",post1);
// const  post2 =  await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
// console.log("Post 2",post2);
// }

// getData();
//Çağırılmadan Çalıştırmak.

(async () => {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  console.log("Data", data);
  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  console.log("Post1", post1);
  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();
  console.log("Post 2", post2);
})();
