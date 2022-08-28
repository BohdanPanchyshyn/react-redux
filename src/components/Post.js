import { useDispatch } from "react-redux";
import { postsActions } from "../redux/action";
import "./Post.css";

const Post = (props) => {

   const dispatch = useDispatch();
   const { index, posts } = props;

   const icons = {
      like: require("./img/like.png"),
      comments: require("./img/comments.png"),
      retweet: require("./img/retweet.png"),
      share: require("./img/share.png"),
      dot: require("./img/dot.png"),
      accept: require("./img/accept.png"),


   };


   const addlike = () => {
      dispatch(postsActions.changeLike(index))
   }

   const addComments = () => {
      dispatch(postsActions.changeComments(index))
   }

   const addShare = () => {
      dispatch(postsActions.changeShare(index))
   }


   return (
      <div className="container">
         <div className="post">
            <div className="head">
               <img className="photo" src={posts.userImage} alt="author" />
               <div className="headText">
                  <p className="nameAuthor">{posts.user}</p>
                  <img className="ico" src={icons.accept} alt="icons_accept" />
                  <span className="nickname">{posts.userNickname}</span>
                  <img className="dot" src={icons.dot} alt="icons_dot" />
                  <span className="date">{posts.createdAt}</span>
               </div>
               <span className="text">{posts.text}</span>
            </div>
            <div className="main">
               <img className="contentImage" src={posts.postImage} alt="content" />
            </div>
            <div className="footer">
               <span className="like">
                  <img className="like" src={icons.like} alt="icons_like" onClick={addlike} />
                  {posts.likeCounter}
               </span>
               <span className="comments">
                  <img className="comments" src={icons.comments} alt="icons_comments" onClick={addComments} />
                  {posts.commentsCounter}
               </span>
               <span className="share">
                  <img className="share" src={icons.share} alt="icons_share" onClick={addShare} />
                  {posts.repostCounter}
               </span>
            </div>
         </div>
      </div>
   )
}

export default Post;