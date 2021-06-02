import React from "react";
import { useForm } from "react-hook-form";
const AddPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const postData = {
      title: data.title,
      description: data.description,
    };

    const url = `http://localhost:5052/addPost`;
    console.log(postData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((res) => console.log("server side", res));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input
      type="text"
      {...register("title")}
      placeholder="Title"
    />
    <br />
    <br />
    <textarea type="text" {...register("description")} placeholder="Description" />
    <br />
    <br />
    
    <br />
    <br />
    {errors.exampleRequired && <span>This field is required</span>}
    <input type="submit" value="Post" className = "btn btn-primary"/>
    <br />
    <br />
  </form>
  );
};

export default AddPost;
