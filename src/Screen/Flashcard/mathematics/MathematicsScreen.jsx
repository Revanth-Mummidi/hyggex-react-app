import React from "react";
import { Link, useLocation ,Outlet} from "react-router-dom";

function MathematicsScreen() {
  const location=useLocation();
  return (
  <div>
    <div className='flex  mt-10 justify-center items-center gap-6'>
      <div className='bg-blue-500 rounded-lg p-4'>
        <Link to={`${location.pathname}/relation-and-function`}>Relation and Function</Link>
      </div>
      <div className='bg-blue-500 rounded-lg p-4'>
        <Link>Integration</Link>
      </div>
      <div className='bg-blue-500 rounded-lg p-4'>
        <Link>Trignometery</Link>
      </div>
    </div>
   < Outlet/>
  </div>
  );
}

export default MathematicsScreen;
