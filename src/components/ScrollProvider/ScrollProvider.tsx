"use client";

import * as React from "react";

type ScrollContextData = {
  scrollTop: number;
};

const initialContextData: ScrollContextData = {
  scrollTop: 0,
};

const ScrollContext = React.createContext(initialContextData);

export const useScroll = () => React.useContext(ScrollContext);

function ScrollProvider({ children }: React.PropsWithChildren<{}>) {
  const [scrollTop, setScrollTop] = React.useState<number>(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrollTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;
