import React, { useEffect, useState } from 'react'

const useCountDown = () => {
  const [secLeft,setSecLeft]=useState(0);
  useEffect(()=>{
    if(secLeft<=0) return;
    const timeout=setTimeout(()=>{
        setSecLeft(secLeft-1);
    },1000);
    return ()=>clearTimeout(timeout);
  },[secLeft]);

  function start(seconds:number){
    setSecLeft(seconds);
  }
  return {secLeft,start};
}

export default useCountDown
