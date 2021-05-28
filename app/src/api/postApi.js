import axios from  "./axios-instance"

const route = "/api/posts";

export const fetchPosts = () => axios.get(route);
export const createPost = (newPost) => axios.post(route, newPost);