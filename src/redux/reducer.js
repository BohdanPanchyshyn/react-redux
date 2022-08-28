import { actionTypes } from "./types";


const initState = {
   posts: [
      {
         user: "Юля",
         userImage: "https://cdn-icons-png.flaticon.com/512/2423/2423830.png",
         userNickname: "@ps_sweet",
         createdAt: "28.08.2022",
         text: "Beatiful!",
         postImage: "https://cdn.pixabay.com/photo/2020/03/18/15/36/woman-4944484_640.jpg",
         likeCounter: 0,
         isLiked: false,
         commentsCounter: 0,
         isComments: false,
         repostCounter: 0,
         isRepost: false,
      },
      {
         user: "Богдан",
         userImage: "https://cdn-icons-png.flaticon.com/512/3518/3518732.png",
         userNickname: "@xray",
         createdAt: "28.08.2022",
         text: "... if (audi) {return Nice} else {return only Audi!}",
         postImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
         likeCounter: 2,
         isLiked: false,
         commentsCounter: 1,
         isComments: false,
         repostCounter: 100,
         isRepost: false,
      },
   ],

}

export default function postReducer(state = initState, action) {

   switch (action.type) {
      case actionTypes.ADD_POST:
         return {
            ...state,
            posts: [...state.posts, action.payload]
         }

      case actionTypes.CHANGE_LIKE:
         return {
            ...state,
            posts: [...state.posts.map((el, indx) => {
               if (indx === action.payload) return ({
                  ...el,
                  likeCounter: el.isLiked ? el.likeCounter - 1 : el.likeCounter + 1,
                  isLiked: !el.isLiked,
               })
               return el
            })]
         }

      case actionTypes.CHANGE_COMMENTS:
         return {
            ...state,
            posts: [...state.posts.map((el, indx) => {
               if (indx === action.payload) return ({
                  ...el,
                  commentsCounter: el.isComments ? el.commentsCounter - 1 : el.commentsCounter + 1,
                  isComments: !el.isComments,
               })
               return el
            })]
         }

      case actionTypes.CHANGE_SHARE:
         return {
            ...state,
            posts: [...state.posts.map((el, indx) => {
               if (indx === action.payload) return ({
                  ...el,
                  repostCounter: el.isRepost ? el.repostCounter - 1 : el.repostCounter + 1,
                  isRepost: !el.isRepost,
               })
               return el
            })]
         }


      default:
         return state;
   }



}