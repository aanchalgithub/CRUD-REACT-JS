import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
    const [id,setId] = useState(0)
    const [name,setName] = useState('')
    const [content , setContent] = useState('')
    const navigate = useNavigate()

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            console.log(id,name,content);
            
            await axios.put(`https://66d7dd5937b1cadd80527ec0.mockapi.io/api/create/crud/${id}`,{
                name : name,
                content : content
            })
            navigate('/read')
        } catch (error) {
            console.log(error.message);
            
        }
    }

    useEffect(()=>{
        setId(localStorage.getItem("id")),
        setName(localStorage.getItem("name")),
        setContent(localStorage.getItem("content"))
    },[])

const onhandleInput = (e) =>{
    console.log(e.target.value,"hbfu");
    
   setName(e.target.value)
}

const onHandleContent = (e) =>{
    console.log(e.target.value)
    setContent(e.target.value)
}

  return (
    <>
        <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onhandleInput}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={onHandleContent}
            value={content}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  )
}

export default Update