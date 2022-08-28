import { actionTypes } from "./types";

const createPost = (posts) => ({

   type: actionTypes.ADD_POST,
   payload: posts,
})

const changeLike = (indx) => ({
   type: actionTypes.CHANGE_LIKE,
   payload: indx,
})

const changeComments = (indx) => ({
   type: actionTypes.CHANGE_COMMENTS,
   payload: indx,
})

const changeShare = (indx) => ({
   type: actionTypes.CHANGE_SHARE,
   payload: indx,
})


export const postsActions = {
   createPost,
   changeLike,
   changeComments,
   changeShare,
}