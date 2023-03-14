import axios from 'axios'; // to make API calls


const url = 'http://localhost:5000/posts';  // this is the URL pointing to backend route

export const fetchPosts = () => axios.get(url);           // make a call

// we gonna add redux for backend side.
// we gonna use same consistency by redux
