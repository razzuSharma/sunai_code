import React, { useRef, useEffect } from "react";
export default function useScroll() {
  const listInnerRef = useRef();
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight;
      if (isNearBottom) {
        console.log("Reached bottom");
        // DO SOMETHING HERE
      }
    }
  };

  useEffect(() => {
    const listInnerElement = listInnerRef.current;

    if (listInnerElement) {
      listInnerElement.addEventListener("scroll", onScroll);

      // Clean-up
      return () => {
        listInnerElement.removeEventListener("scroll", onScroll);
      };
      
    }
  }, []);
}
