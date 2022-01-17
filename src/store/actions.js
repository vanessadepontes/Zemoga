import {
  SET_POSTS,
  INITIAL_STATE,
  SET_LOADING,
  SET_ERROR,
  SET_USER,
  SET_COMMENTS,
} from './actionTypes';
import { fetchPosts, getUser, fetchComments } from '../services/services'


export const getPosts = () => async (dispatch) => {
  setLoading(true);
  try {
    const data = await fetchPosts();
    let num = data.length > 20 ? 20 : data.length
    for (let i = 0; i < data.length; i++) {
      data[i].favorite = false;
      data[i].unread = false;
    }
    for (let i = 0; i < num; i++) {
      data[i].unread = true;
    }
    dispatch(setPosts(data));
  } catch (err) {
    setError(err.message)
  }
}


export const setFavorite = (data) => async (dispatch, getState) => {
  let {posts} = getState().data;
  const index = posts.findIndex(v => v.id === data)
  posts[index].favorite = !posts[index].favorite;
  dispatch(setPosts(posts));
}

export const setRead = (data) => async (dispatch, getState) => {
  let {posts} = getState().data;
  const index = posts.findIndex(v => v.id === data)
  posts[index].unread = false;
  dispatch(setPosts(posts));
}

export const getDataUser = (idUser) => async (dispatch) => {
  setLoading(true);
  try {
    const data = await getUser(idUser);
    dispatch(setUser(data[0]));
  } catch (err) {
    setError(err.message)
  }
}

export const getComments = (id) => async (dispatch) => {
  setLoading(true);
  try {
    const data = await fetchComments(id);
    dispatch(setComments(data));
  } catch (err) {
    setError(err.message)
  }
}

export const setComments = (data) => {
  return {
    type: SET_COMMENTS,
    payload: data
  }
}

export const setPosts = (data) => {
  return {
    type: SET_POSTS,
    payload: data
  }
}


export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data
  }
}


export const setInitialState = () => {
  return {
    type: INITIAL_STATE,
  }
}

export const setLoading = (data) => {
  return {
    type: SET_LOADING,
    payload: data
  }
}

export const setError = (data) => {
  return {
    type: SET_ERROR,
    payload: data
  }
}

