import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([])
 
     const readData = async()=>{
        try {
           const {data} = await axios.get("https://66d7dd5937b1cadd80527ec0.mockapi.io/api/create/crud")
           setData(data)
            console.log(data,'hfhf');
            
        } catch (error) {
            console.log(error.message); 
        }
    }

const handleDelete = async(id) =>{
    try {
      await axios.delete(`https://66d7dd5937b1cadd80527ec0.mockapi.io/api/create/crud/${id}`);
    readData();
    } catch (error) {
      console.log(error.message);
      
    }
}

 const onSetLocalStorage = (id,name,content) =>{
        localStorage.setItem("id" , id)
        localStorage.setItem("name" , name)
        localStorage.setItem("content" , content)
 }

    useEffect(()=>{
        readData();
    },[])
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Content</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

       {data?.map((item)=>(
       
        
         <tr key={item.id}>
           <th scope="row">{item.id}</th>
           <td>{item.name}</td>
           <td>{item.content}</td>
           <td><Link to='/update'><button className="btn btn-primary" onClick={()=>onSetLocalStorage(item.id,item.name,item.content)}>Edit</button></Link></td>
           <td><button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button></td>
         </tr>
       ))}
       </tbody>

      </table>
    </>
  );
};

export default Read;
