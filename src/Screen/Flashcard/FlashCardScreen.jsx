import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function FlashCardScreen() {
  const location = useLocation();
  return (
    <div>
      <div className="flex justify-center items-center gap-6">
        <div className="bg-blue-500 rounded-lg p-4">
          <Link to={`${location.pathname}/mathematics`}>Mathematics</Link>
        </div>
        <div className="bg-blue-500 rounded-lg p-4">
          <Link>Science</Link>
        </div>
        <div className="bg-blue-500 rounded-lg p-4">
          <Link>Biology</Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default FlashCardScreen;
