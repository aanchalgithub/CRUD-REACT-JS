import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate()

  const header = { "Access-Control-Allow-Origin": "*" };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onContentChange = (e) => {
    console.log(e.target.value);

    setContent(e.target.value);
  };

  const onHandleClick = async(e) => {
    e.preventDefault();

  try {
    await axios.post("https://66d7dd5937b1cadd80527ec0.mockapi.io/api/create/crud", {
      name: name,
      content: content,
      header,
    });
    navigate('/read')
  } catch (error) {
      console.log(error.message);
      
  }
  };
  return (
    <>
      <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={onContentChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => onHandleClick(e)}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
