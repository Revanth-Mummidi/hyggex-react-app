import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/poweredby.svg";
import Add from '../../assets/createFlashcard.svg';
import down from '../../assets/down.svg';

function FlashCardLayout() {
  const [open,setOpen]=useState([true,true,true]);
  const faqs=[{
    question:"Can education flashcards be used for all age groups?",
    answer:"Yes, education flashcards can be used for all age groups."
  },
  {
    question:"How do education flashcards work?",
    answer:"Education Flashcards work to prepare a particular topic by studying the theory and giving quizes on it."
  },
  {
    question:"Can education flashcards be used for test preparation?",
    answer:"Yes,education flashcards can be used for test preparation."
  }
]
  return (
    <div>
    
      <Outlet />
      <div className="flex flex-row justify-between">
        <img src={logo} className="aspect-square w-44"></img>
        <img src={Add} className="aspect-square w-64"></img>
      </div>
      <div className="flex flex-col">
          <p className="bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text font-bold text-5xl self-start">FAQ</p>
          <br></br>
          <div className="flex flex-col gap-10">

          {
            faqs.map((item,index)=>{
              return(
                <div onClick={()=>{
                  let arr=open.map((it,idx)=>{
                     if(idx==index)
                     {
                      return !it;
                     }
                     else return it;
                  });
                  // arr[index]=!arr[index];
                  setOpen(arr);
                }} key={index}  className=" border border-[#217EEC] flex px-4 py-2 rounded-lg flex-col justify-between gap-3 ">
                  <div className="flex flex-row justify-between items-center">
                  <p className=" font-semibold text-[#28262C text-base">{item.question}</p>
                  <img  src={down}  className={open[index]?"rotate-0":"rotate-180 "}></img>
                  </div>
                 {!open[index]?(<p className=" text-left font-semibold text-gray-700 my-auto">{item.answer}</p>):null}
                </div>
              )
            })
          }
          
          </div>
      </div>
    </div>
  );
}

export default FlashCardLayout;
