import axios from "axios";

const getData = async(userId) => {
  const { data: users } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  console.log(users);
};

export  {getData as default};