import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../redux/action";
import Post from "./Post";
import "./Posts.css"

const Posts = () => {
   const { posts } = useSelector(state => state)
   const [text, setText] = useState("");
   const [postImage, setPostImage] = useState("");
   const [user, setUser] = useState("Назарко");
   const dispatch = useDispatch();


   const getUserNameAndAvatar = useMemo(() => {
      if (!user) return
      switch (user.toLowerCase()) {
         case "назарко":
            return {
               userNickname: "@наз_їв_псів",
               userImage: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
            }

         case "юрчик":
            return {
               userNickname: "@yura",
               userImage: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
            }

         case "андрійко":
            return {
               userNickname: "@black_dog",
               userImage: "https://cdn-icons-png.flaticon.com/512/4202/4202831.png",
            }

         case "артур":
            return {
               userNickname: "@пішов_на_перекур",
               userImage: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
            }

         default:
            return {
               userNickname: "@default_nickname",
               userImage: "default_image",
            }
      }
   }, [user])


   function onSubmit(e) {
      if (!text || !postImage) return
      e.preventDefault();
      const post = {
         text: text,
         postImage: postImage,
         user: user,
         createdAt: new Date().toLocaleDateString(),
         userImage: getUserNameAndAvatar.userImage,
         userNickname: getUserNameAndAvatar.userNickname,
         likeCounter: 0,
         isLiked: false,
         commentsCounter: 0,
         isComments: false,
         repostCounter: 0,
         isRepost: false,
      }
      dispatch(postsActions.createPost(post));
      setText("");
      setPostImage("");
      setUser("Назарко");
   }


   return (
      <div>
         <div className="containerPosts">
            <div className="addPost">
               <form onSubmit={onSubmit} className="formPost">
                  <textarea onChange={(e) => setText(e.target.value)} className="textAreaPosts" placeholder="Введіть текст новини" value={text} required />
                  <input onChange={(e) => setPostImage(e.target.value)} className="linkPhoto" placeholder="Вставте посилання на зображення" value={postImage} required />
                  <div className="buttonAndSelect">
                     <select name="users" id="users" onChange={(e) => setUser(e.target.value)} value={user} className="selectUser" >
                        <option value="Назарко" >Назарко</option>
                        <option value="Юрчик">Юрчик</option>
                        <option value="Андрійко">Андрійко</option>
                        <option value="Артур">Артур</option>
                     </select>
                     <button type="submit" className="buttonAddPost">Додати</button>
                  </div>
               </form>
            </div>
         </div>
         <div>
            {posts.map((el, indx) => (<Post index={indx} posts={el} key={indx} />))}
         </div>

      </div>
   )
}

export default Posts;