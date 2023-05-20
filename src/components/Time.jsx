import React,{useState} from "react";


function Time(){

    setInterval(updateTime,1000);
    const currentTime = new Date().toLocaleTimeString();
  
    const[curTime , setTime]= useState(currentTime);
  
    function updateTime(){
    const time =new Date().toLocaleTimeString();
  
    setTime(time)
  
    };
    return <h2>{curTime}</h2>
};

export default Time;