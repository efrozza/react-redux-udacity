import * as ReadAPI from '../utils/api-utils'
export const GET_POSTS = 'GET_ALL_POSTS'
export const GET_POSTS_CATEGORY = 'GET_POSTS_CATEGORY'
export const VOTE_POST = 'VOTE_POST'

export function getPosts () {
  return dispatch =>
    ReadAPI.getAllPosts()
      .then(post =>
        dispatch({
          type: GET_POSTS,
          posts: post
        })
      )
      .catch('Erro no acesso a API POSTS')
}

export function listPostsCategory (category) {
  return dispatch =>
    ReadAPI.getAllPostsCategory(category)
      .then(post =>
        dispatch({
          type: GET_POSTS_CATEGORY,
          posts: post
        })
      )
      .catch('Erro no acesso a API POSTS')
}

export function votePost (id, vote) {
  console.log('entrou na action votePost' + id + vote)
  return dispatch =>
    ReadAPI.votePost(id, vote)
      .then(post =>
        dispatch({
          type: VOTE_POST,
          post: post
        })
      )
      .catch('Erro no acesso a API POSTS')
}
