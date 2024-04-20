import { useState, useEffect } from "react";

interface MediaProps {
  isMobile: boolean;
}

export const useMedia = (breakpoint: number = 768): MediaProps => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < breakpoint);
      }
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [breakpoint]);

  return { isMobile };
};

// import { useState, useEffect } from "react";
//
// export const useMedia = (breakpoint = 768) => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
//
//   useEffect(() => {
//     const handleResize = () => {
//       if (window !== undefined) {
//         setIsMobile(window.innerWidth < breakpoint);
//       }
//     };
//
//     window.addEventListener("resize", handleResize);
//
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [breakpoint]);
//
//   return { isMobile };
// };
