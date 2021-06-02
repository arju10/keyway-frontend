import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Update from "../../Update/Update";

const Posts = (props) => {
  const [currentPost, setCurrentPost] = useState(props.post);
  const { title, description, _id } = currentPost;
  const [updateStatus, setUpdatestatus] = useState(false);

  const setPostAction = props.setPostAction;

  const deletePost = (id) => {
    axios.delete(`https://lit-coast-65841.herokuapp.com/${id}`).then((res) => {
      console.log(res.post);
      setPostAction(id);
    });
    window.alert("Deleted Successfully!");
  };

  const lodingSinglePost = (id) => {
    setUpdatestatus(true);
    console.log(id);
  };

  return (
    <>
      <Card style={{ width: "58rem" }} className="mt-2">
        {!updateStatus ? (
          <>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Created by - {title}
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>

              <p>
                <button
                  id="delete"
                  onClick={() => deletePost(`${_id}`)}
                  className="btn btn-warning"
                >
                  Delete
                </button>
                <button
                  id="update"
                  onClick={() => lodingSinglePost(`${_id}`)}
                  className="btn btn-success"
                >
                  Edit
                </button>
              </p>
            </Card.Body>
          </>
        ) : (
          <Update
            setPostAction={setPostAction}
            setCurrentPost={setCurrentPost}
            id={_id}
          ></Update>
        )}
      </Card>
    </>
  );
};

export default Posts;
