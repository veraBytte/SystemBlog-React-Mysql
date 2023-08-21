import React from "react";
import { useEffect } from "react";
import axios from "axios";

const Menu = ({cat}) => {

    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://localhost:3001/api/posts?cat=${cat}`);
                setPosts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [cat]);

    return (
        <div className="menu">
            <h1>Descubre Mas !!</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={`../../public/upload/${post.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button className="secondary_button">Ver mas</button>
                </div>
            ))}
        </div>
    );
}

export default Menu;