import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const Update = ({id, setUpdateStatus,setCurrentPost}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    const [singlePost, setSinglePost] = useState({});
    const {title , description, _id}  = singlePost;

    useEffect(() => {
        // axios.get(`https://lit-coast-65841.herokuapp.com/${id}`)
        // .then((res) => {
        //     console.log(res.data);
        //     setSinglePost(res.data);
        // })
        fetch(`https://lit-coast-65841.herokuapp.com/${id}`)
        .then(res=> res.json())
        .then(data => setSinglePost(data))
    },[id])

      const onSubmit = (data) => {
        const newPost = {...data};
        const url = `https://lit-coast-65841.herokuapp.com/${id}`
        axios.patch(url, newPost).then((res) => {
            setUpdateStatus(false);
            setCurrentPost({_id, ...newPost});
        });
    };
    return (
        <div>
               <form onSubmit={handleSubmit(onSubmit)}>
    <input
      type="text"
      {...register("singlePost.title")}
      placeholder="Title"
    />
    <br />
    <br />
    <input type="text" {...register("singlePost.description")} placeholder="Description" />
    <br />
    <br />
    
    <br />
    <br />
    {errors.exampleRequired && <span>This field is required</span>}
    <button
            type="submit"
            onClick={() => setUpdateStatus(false)}
            className="rounded mx-3 btn-outline-dark cancle"
          >
            Cancle
          </button>
          <input
            className="rounded btn-outline-secondary"
            type="submit"
            value="SAVE"
          />
    <br />
    <br />
  </form>
        </div>
    );
};

export default Update;