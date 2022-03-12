import axios from "axios";

const getData = async(userId) => {
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const { data: users } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  let obj = {
      ...users,
      posts
  };
  

  console.log(obj)
};

export  {getData as default};