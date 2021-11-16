import React from "react";
import { Button } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function NavButton({prev, next, showPrev, showNext}) {
  return (
    <div className="text-center">
        {prev && <Button onClick={showPrev} style={{backgroundColor:"#222224"}} className="m-1"><BsChevronLeft /></Button>}
        {next && <Button onClick={showNext} style={{backgroundColor:"#222224"}} className="m-1"><BsChevronRight /></Button>}
    </div>
  );
}

export default NavButton;
