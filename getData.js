import fetch from 'node-fetch';
import axios from 'axios';

const getData = async function (userID) {
  const { data: user_data } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );

  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${userID}`
  );

  console.log(user_data);
  console.log(post);
};

export default getData;
