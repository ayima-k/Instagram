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

export const getAllStories = (accessToken) => axios.get('stories', headers(accessToken))
export const getSingleStory = (id, accessToken) => axios.get(`stories/${id}`, accessToken)
export const createStory = (data, accessToken) => axios.post('stories/', data, headers(accessToken))
export const deleteStory = (id, accessToken) => axios.delete(`stories/${id}`, headers(accessToken))

export const getAllPosts = (accessToken) => axios.get('posts', headers(accessToken))
export const getSinglePost = (id, accessToken) => axios.get(`posts/${id}`, headers(accessToken))
export const createPost = (data, accessToken) => axios.post(`posts/`, data, headers(accessToken))
export const editPost = (id, data, accessToken) => axios.put(`posts/${id}/`, data, headers(accessToken))
export const deletePost = (id, accessToken) => axios.delete(`posts/${id}`, headers(accessToken))

export const postLike = (data, accessToken) => axios.post('likes/', data, headers(accessToken))
export const deleteLike = (id, accessToken) => axios.delete(`likes/${id}`, headers(accessToken))

export const getFollowers = (id) => axios.get(`users/${id}/subscribers`)
export const getFollowings = (id) => axios.get(`users/${id}/subscriptions`)
export const getStories = (id) => axios.get(`users/${id}/stories`)
export const getSaves = (id, accessToken) => axios.get(`users/${id}/saves`, headers(accessToken))
export const getArchives = (id) => axios.get(`users/${id}/archives`)
export const getPostsOfUser = (id) => axios.get(`users/${id}/posts`)

export const getSearch = (query) => axios.get(`users/?search=${query}`)

export const postFollow = (data, accessToken) => axios.post('follow/', data, headers(accessToken))
export const unFollow = (id, accessToken) => axios.delete(`follow/${id}`, headers(accessToken))
export const postFollowers = (data, accessToken) => axios.post('follow/', data, headers(accessToken))

export const getComments = (id, accessToken) => axios.get(`posts/${id}/comments`, headers(accessToken))
export const postComments = (data, accessToken) => axios.post('comments/', data, headers(accessToken))

export const getLiked = (id, accessToken) => axios.get(`users/${id}/likes/`, headers(accessToken))

export const savePost = (data, accessToken) => axios.post('saves/', data, headers(accessToken))
export const deleteSave = (id, accessToken) => axios.delete(`saves/${id}`, headers(accessToken))

export const getFollowRequests = (accessToken) => axios.get(`follow/requests/`, headers(accessToken))
export const confirmRequest = (id, accessToken) => axios.put(`follow/${id}/`, headers(accessToken))
export const deleteRequest = (id, accessToken) => axios.delete(`follow/${id}`, headers(accessToken))