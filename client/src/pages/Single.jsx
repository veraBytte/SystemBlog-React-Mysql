import React from "react";
import Editar from "../assets/editar.png";
import Eliminar from "../assets/borrar.png";
import {Link, useLocation} from "react-router-dom";
import { useEffect } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";



const Single = () => {

    const [post, setPost] = React.useState({});

    const location = useLocation()
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];
    const {currentUser} = React.useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://localhost:3001/api/posts/${postId}`);
                setPost(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try{
            await axios.delete(`http://localhost:3001/api/posts/${postId}`);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className="single">
            <div className="content">
                <img  src={post?.img}/>
            <div className="user">
            {post.userImg ? (
                <img className="content_avatar" src={post.userImg} alt="" />
                ) : (
                <img className="content_avatar" src="https://unavatar.io/github/37t?fallback=https://source.boringavatars.com/marble/120/1337_user?colors=264653r,2a9d8f,e9c46a,f4a261,e76f51" alt="" />
            )}
                <div className="info">
                    <span>{post.username}</span>
                    <p>Posted {moment(post.date).fromNow()}</p>
                </div>

                {currentUser && currentUser.username === post.username && (
                <div className="edit">
                    <Link to={`/write?edit=2`}>
                    <img className="interaction" src={Editar} alt="" />
                    </Link>
                    <img className="interaction" onClick={handleDelete} src={Eliminar} alt="" />
                </div>
                )}
            </div>



            <h1 className="title">{post.title}</h1>
            {post.description}

            </div>

            <div>
                <Menu />
            </div>
        </div>
    );
}

export default Single;