import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPosts = (newPost) => axios.post(url, newPost);

export const updatePost = (post, _id) => axios.patch(`${url}/${_id}`, post);

export const deletePost = (_id) => axios.delete(`${url}/${_id}`);

export const likePost = (_id) => axios.patch(`${url}/${_id}/likePost`, _id);
