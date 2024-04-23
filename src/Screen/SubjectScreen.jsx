import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import undo from "../assets/Undo.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import zoom from "../assets/Zoom.svg";
import hint from "../assets/Hint.svg";
import speaker from "../assets/Speaker.svg";
import { FaVolumeMute } from "react-icons/fa";

function SubjectScreen() {
  const [fullscreen, setFullscreen] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const studyData = [
    "9 + 6 + 7x - 2x - 3",
    "10 + 6x - 7x - 2x - 3",
    "18 - 7 + 5x - 2x - 3",
    "3 + 6 + 7x + 2x - 6",
    "2 + 6 + 17x - 23x - 3",
    "9 + 6 + 7x - 2x - 3",
    "10 + 6x - 7x - 2x - 3",
    "18 - 7 + 5x - 2x - 3",
    "3 + 6 + 7x + 2x - 6",
    "2 + 6 + 17x - 23x - 3",
  ];
  const path_array = location.pathname;
  const route = path_array.split("/");
  let concept = route[route.length - 2];
  concept =
    concept[0].charAt(0).toUpperCase() + concept.substring(1).toLowerCase();
  concept = "( " + concept + " )";
  let subject = route[route.length - 1].split("-");
  let s1 =
    subject[0].charAt(0).toUpperCase() + subject[0].substring(1).toLowerCase();
  let s2 =
    subject[2].charAt(0).toUpperCase() + subject[2].substring(1).toLowerCase();
  subject = [s1, subject[1], s2, concept].join(" ");

  //  subject=subject.charAt(0).U
  const options = ["Study", "Quiz", "Test", "Game", "Others"];
  const [idx, setIndex] = useState(1);
  const [isMute,setMute]=useState(false);
  const toggleFullscreen = () => {
    setFullscreen((prevState) => !prevState);
  };
  if (fullscreen) {
    return (
      <div className="fixed top-0 left-0  w-screen h-screen bg-gradient-to-bl from-[#051A91] via-[#061C93] via-[#2284F1] to-[#1F80EB] z-40">
        <div className="w-full h-full flex justify-center relative">
          <div className="absolute container top-7 max-w-screen-lg  flex justify-between">
            <img src={hint} className="w-8 h-8"></img>
            {isMute?(<FaVolumeMute onClick={()=>{setMute(!isMute)}} className="w-6 h-6 text-white" />):(<img onClick={()=>{setMute(!isMute)}} src={speaker} className="w-6 h-6"></img>)}
          </div>
          <p className="text-white font-bold text-3xl my-auto ">
              {studyData[page - 1]}
            </p>
            <div className="absolute bg-white rounded-3xl px-9 py-2 bottom-5 flex w-4/5 mx-auto flex-row justify-between items-center">
              <img
                onClick={() => {
                  setPage(1);
                }}
                src={undo}
                className="w-8 h-8"
              ></img>
              <div className="flex flex-row mx-auto justify-between gap-6 items-center">
                <img
                  onClick={() => {
                    if (page != 1) {
                      setPage(page - 1);
                    }
                  }}
                  src={left}
                  className="w-14 h-14"
                ></img>
                <p className="text-black font-bold text-lg">
                  {page < 10
                    ? `0${page}/${studyData.length}`
                    : `${page}/${studyData.length}`}
                </p>
                <img
                  onClick={() => {
                    if (page != studyData.length) {
                      setPage(page + 1);
                    }
                  }}
                  src={right}
                  className="w-14 h-14"
                ></img>
              </div>
              <img
                onClick={() => setFullscreen((s) => !s)}
                src={zoom}
                className="w-8 h-8 "
              ></img>
            </div>
          </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <p className="bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text font-bold text-2xl self-start">
        {subject}
      </p>
      <br></br>
      <div className="flex flex-col w-3/5  mx-auto ">
        <div className="flex  flex-row items-center gap-10 mx-auto">
          {options.map((item, index) => {
            return (
              <p
                onClick={() => {
                  setIndex(index);
                }}
                className={
                  idx == index
                    ? "text-[#06286E] font-bold underline underline-offset-8"
                    : "text-[#696671] font-semibold"
                }
                key={index}
              >
                {item}
              </p>
            );
          })}
        </div>
        <br></br>
        <div
          className={
            fullscreen
              ? "absolute z-20 w-full h-screen   transition-transform delay-700 "
              : "bg-gradient-to-bl from-[#051A91] via-[#061C93] via-[#2284F1] to-[#1F80EB] p-4 rounded-3xl w-full aspect-video mx-auto  justify-center items-center transition-transform delay-700"
          }
        >
          <div className="w-full h-full relative flex flex-col ">
            {/* <div className="absolute w-full h-24 z-0 bg-slate-700"> </div> */}
            <div className="flex flex-row justify-between">
              <img src={hint} className="w-8 h-8"></img>
              {isMute?(<FaVolumeMute onClick={()=>{setMute(!isMute)}} className="w-6 h-6 text-white" />):(<img onClick={()=>{setMute(!isMute)}} src={speaker} className="w-6 h-6"></img>)}
            </div>
            <p className="text-white font-bold text-3xl my-auto ">
              {studyData[page - 1]}
            </p>
            {fullscreen && (
              <div className="mx-auto flex justify-between gap-10">
                <span>❌</span>
                <span>❌</span>
                <span>❌</span>
                <span onClick={toggleFullscreen} className="">
                  {" "}
                  {fullscreen ? "😊" : "🕸️"}
                </span>
              </div>
            )}
          </div>
        </div>
        <br />
        <div className="flex w-4/5 mx-auto flex-row justify-between items-center">
          <img
            onClick={() => {
              setPage(1);
            }}
            src={undo}
            className="w-8 h-8"
          ></img>
          <div className="flex flex-row mx-auto justify-between gap-6 items-center">
            <img
              onClick={() => {
                if (page != 1) {
                  setPage(page - 1);
                }
              }}
              src={left}
              className="w-14 h-14"
            ></img>
            <p className="text-black font-bold text-lg">
              {page < 10
                ? `0${page}/${studyData.length}`
                : `${page}/${studyData.length}`}
            </p>
            <img
              onClick={() => {
                if (page != studyData.length) {
                  setPage(page + 1);
                }
              }}
              src={right}
              className="w-14 h-14"
            ></img>
          </div>
          <img
            onClick={() => setFullscreen((s) => !s)}
            src={zoom}
            className="w-8 h-8"
          ></img>
        </div>
        <br></br>
        {/* <div className="mx-auto flex justify-between gap-10">
          <span>❌</span>
          <span>❌</span>
          <span>❌</span>
          <span onClick={() => setFullscreen((s) => !s)} className="">
            {" "}
            {fullscreen ? "😊" : "🕸️"}
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default SubjectScreen;
