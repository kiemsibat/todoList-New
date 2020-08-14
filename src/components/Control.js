import React from "react";
import Search from './Search';
import Sort from './Sort';
function Control() {
  return (
    <div className="row mt-15">
        {/* search */}
        <Search/>
        {/* sort */}
        <Sort/>
      </div>
  );
}

export default Control;
