import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddPost from "../PostModal/PostModal";
import Posts from "../Posts/Posts";

const Home = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [posts, setPosts] = useState([]);
  const [productAction, setPostAction] = useState("");
  useEffect(() => {
    fetch("https://lit-coast-65841.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Container>
      <div>
       
        <Link className="read-more btn" >
          <Button className="btn btn-primary" onClick={openModal} variant = "lg">
            Create Post
          </Button>
        </Link>
          <AddPost modalIsOpen={modalIsOpen} closeModal={closeModal}></AddPost>
        
          {posts.map((post) => 
            <Posts post={post} key = {post._id} setPostAction = {setPostAction}></Posts>
          )}
  
      </div>
    </Container>
  );
};

export default Home;
