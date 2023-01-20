import axios from "axios";

const headers = (accessToken) => {
  return {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }
}

export const getUser = () => axios.get('users/')
export const getUserById = (id) => axios.get(`users/${id}`)
export const getRegister = (data) => axios.post('users/', data)
export const getToken = (data) => axios.post('token/', data)
export const putUser = (id, data, accessToken) => axios.put(`users/${id}/`, data, headers(accessToken))

export const getSingleUser = (id) => axios.get(`users/${id}`)
export const getSingleStory = (id, accessToken) => axios.get(`stories/${id}`, accessToken)

export const getFollowers = (id) => axios.get(`users/${id}/subscribers`)
export const postFollowers = (data, accessToken) => axios.post('follow/', data, headers(accessToken))
export const getFollowings = (id) => axios.get(`users/${id}/subscriptions`)
export const getStories = (id) => axios.get(`users/${id}/stories`)
export const getSaves = (id) => axios.get(`users/${id}/saves`)
export const getArchives = (id) => axios.get(`users/${id}/archives`)
export const getPostsOfUser = (id) => axios.get(`users/${id}/posts`)
export const createPost = (data, accessToken) => axios.post(`posts/`, data, headers(accessToken))
export const createStory = (data, accessToken) => axios.post('stories/', data, headers(accessToken))

export const getSearch = (query) => axios.get(`users/?search=${query}`)

export const getAllPosts = (accessToken) => axios.get('posts', headers(accessToken))
export const getAllStories = (accessToken) => axios.get('stories', headers(accessToken))

export const postFollow = (data, accessToken) => axios.post('follow/', data, headers(accessToken))
export const unFollow = (id, accessToken) => axios.delete(`follow/${id}`, headers(accessToken))