import { setImages } from '../store/index';
const API = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = async ()=> {
  try {
    let url = `${API}/posts`;
    console.log(url)
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let json = res.json()
    return json
  } catch (err) {
    alert('something went wrong')
    console.log(err);
  } 
}

export const getUser = async (id) => {
  try {
    let url = `${API}/users?id=${id}`;
    console.log(url)
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let json = res.json()
    return json
  } catch (err) {
    alert('something went wrong')
    console.log(err);
  } 
}

export const fetchComments = async (id) => {
  try {
    let url = `${API}/comments?postId=${id}`;
    console.log(url)
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let json = res.json()
    return json
  } catch (err) {
    alert('something went wrong')
    console.log(err);
  } 
}