import React, { useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = React.useState([]);

    const cat = useLocation().search;
    console.log(location);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://localhost:3001/api/posts${cat}`);
                setPosts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [cat]);
    
    return (
        <div className="home">
                <div className="posts_container">
                    {posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="post_img">
                                <img src={post.img} alt="" />
                            </div>

                            <div className="post_content">
                                <Link to={`/post/${post.id}`} className="link">
                                    <h1>{post.title}</h1>
                                </Link>
                                    <p>{post.description}</p>
                                    <button className="secondary_button">Ver mas</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Home;