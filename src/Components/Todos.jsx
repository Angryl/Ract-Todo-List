import React from 'react'
import {Todoitems} from "./Todoitems";

export const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin: "10px auto "
    }
        return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
                  
            {props.todos.length===0? "No Todos To Display":
            props.todos.map((todo)=>{
                 return (
                 <>
                 <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                 <hr/>
                 </>
                 )
             })}      
             
        </div>
    )
}
