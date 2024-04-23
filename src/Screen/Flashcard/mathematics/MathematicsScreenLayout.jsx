import React from "react";
import { Outlet } from "react-router-dom";

function MathematicsScreenLayout() {
  return (
    <div>
      <Outlet />
      <br />
      {/* MathematicsScreenLayout */}
    </div>
  );
}

export default MathematicsScreenLayout;
