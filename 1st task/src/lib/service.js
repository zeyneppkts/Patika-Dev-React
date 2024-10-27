import axios from "axios";

async function getData(user_id) {
    const user = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const posts = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

   console.log(user.data);
   console.log(posts.data[0]);
   
};


export {getData};