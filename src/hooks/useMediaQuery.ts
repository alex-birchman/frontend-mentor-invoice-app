import React from "react";

type Dimensions = {
  width: number;
  height: number;
};

type MediaQuery = {
  desktopWidth: number;
  tabletWidth: number;
};

const defaultMediaQuery: MediaQuery = {
  desktopWidth: 1024,
  tabletWidth: 768,
};

function useMediaQuery({
  desktopWidth,
  tabletWidth,
}: MediaQuery = defaultMediaQuery) {
  const [dimensions, setDimensions] = React.useState<Dimensions | null>(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  const isDesktop = dimensions && dimensions.width >= desktopWidth;
  const isTablet =
    dimensions &&
    dimensions.width >= tabletWidth &&
    dimensions.width < desktopWidth;
  const isMobile = dimensions && dimensions.width < tabletWidth;

  const isLoading = dimensions === null;

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktop, isTablet, isMobile, isLoading };
}

export default useMediaQuery;
