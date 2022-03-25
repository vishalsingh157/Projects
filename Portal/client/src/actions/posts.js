import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (post, _id) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(post, _id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (_id) => async (dispatch) => {
  try {
    await api.deletePost(_id);
    dispatch({ type: "DELETE", payload: _id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (_id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(_id);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
