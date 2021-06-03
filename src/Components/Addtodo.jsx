import React, { useState } from 'react';

export const Addtodo = (props) => {
const [title, setTitle] = useState("");
const [desc, setDec] = useState(""); 
    
const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc ){
        alert("title and description can not be blank");
    }else{
    props.addtodo(title,desc);
   setTitle("");
   setDec("");
}
    }
    return (
        <div>
            <form className="container my-3" onSubmit={submit}>
                <h3>Add a Todo</h3>
                <div className="mb-3">
                    <label for="title " className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e=>{setTitle(e.target.value)})}  className="form-control" id="title" />
                
                 </div>
                    <div className="mb-3">
                        <label for="desc" className="form-label">Todo Description</label>
                        <input type="text"  value={desc} onChange={(e)=>{setDec(e.target.value)}} className="form-control" id="desc" /> 
                    </div>
                            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </form>
                    </div>
    )
}
