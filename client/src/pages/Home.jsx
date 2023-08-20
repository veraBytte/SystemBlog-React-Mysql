import React from "react";
import {Link} from "react-router-dom";

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "React",
            content: "Bla bla bla",
            img: "https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "React",
            content: "Bla bla bla",
            img: "https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "React",
            content: "Bla bla bla",
            img: "https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            title: "React",
            content: "Bla bla bla",
            img: "https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            title: "React",
            content: "Bla bla bla",
            img: "https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            title: "React",
            content: "Bla bla bla",
            img: "https://images.pexels.com/photos/17480199/pexels-photo-17480199/free-photo-of-top-view-of-a-woman-playing-the-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];

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
                                    <p>{post.content}</p>
                                    <button className="secondary_button">Ver mas</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Home;