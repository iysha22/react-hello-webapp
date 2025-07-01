import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// This component allows the scroll to go to the beginning when changing the view,
// otherwise it would remain in the position of the previous view. 
// Investigate more about this React behavior :D 

const ScrollToTop = () => {
     const { pathname } = useLocation();

    useEffect(() => {
       window.scrollTo(0, 0);
  }, [pathname]);

    return null;
};

export default ScrollToTop;


