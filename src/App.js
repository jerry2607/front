  import React, { useEffect, useState } from 'react'
  import './App.css';
  import Header from "./Header.js";
  import Row from './component/Row';
  import Dashboard from './component/Dashboard';
  const App = () => {
    const statement="We design and develop applications that run the world and showcase the future";
    const [correct,setCorrect]=useState(0);
    const [complete,setComplete]=useState(false);
    const greenColor=[[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]]
  const board=[["w","e","","d","e","s","i","g","n",""],
  ["a","n","d","","d","e","v","e","l","o"],
  ["p","e","","a","p","p","l","i","c","a"],
  ["t","i","o","n","s","","","t","h","a"],
  ["t","","r","u","n","","t","h","e",""],
  ["w","o","r","l","d","","a","n","d",""],
  ["s","h","o","w","c","a","s","e","",""],
  ["","","","","","t","h","e","",""],
  ["","","","","","","","","",""],
  ["","","f","u","t","u","r","e","",""]]

  const isCorrect=(i,j,val)=>{
    if(board[i][j]===val){
      setCorrect(correct+1);
      greenColor[i][j]=1;
      console.log("matched");
    }
    else{
      greenColor[i][j]=0;

      console.log("not matched");
    }
    
  }
  useEffect(()=>{
    if(correct>=35)
    setComplete(true);
  },[correct])

  if(complete)
   return <Dashboard/>;
    return (
      <>
      <div className='parent'>
        <div className="matrix">
       <Row i={0} 
       board={board}
       isCorrect={isCorrect}
      greenColor={greenColor}
       />


       <Row i={1} 
       board={board}
       isCorrect={isCorrect}
       />

<Row i={2} 
       board={board}
       isCorrect={isCorrect}
       />
       <Row i={3} 
       board={board}
       isCorrect={isCorrect}
       />
       <Row i={4} 
       board={board}
       isCorrect={isCorrect}
       />

<Row i={5} 
       board={board}
       isCorrect={isCorrect}
       />

       
<Row i={6} 
       board={board}
       isCorrect={isCorrect}
       />

<Row i={7} 
       board={board}
       isCorrect={isCorrect}
       />

<Row i={8} 
       board={board}
       isCorrect={isCorrect}
       />

<Row i={9} 
       board={board}
       isCorrect={isCorrect}
       />

       

        </div>
      </div>
      )
      </> 
    )
  }

  export default App
