import React from 'react'
import "../App.css";
const Row = ({i,board,isCorrect}) => {
  return (
    <div className="row">{
    board[i].map((item,index)=>{
  
        return (
          item===""?
          <input key={index} id="disable" type="text" readOnly/>    
          :
          (
            (index&1)?
            (
             <input key={index}type="text" value={item} readOnly/>
             
             )
             :
             (
             <input key ={index}type="text" maxLength={1}  
             onChange={(e)=>{isCorrect(i,index,e.target.value);
                              
                            }}
             /> 
             )           
        )
        )
      })
      }
      </div>
  )
}

export default Row
