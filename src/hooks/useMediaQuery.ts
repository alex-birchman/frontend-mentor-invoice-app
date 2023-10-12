import React from "react";

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
    const [dimensions, setDimensions] = React.useState(() => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    });

    const isDesktop = dimensions.width >= desktopWidth;
    const isTablet =
        dimensions.width >= tabletWidth && dimensions.width < desktopWidth;
    const isMobile = dimensions.width < tabletWidth;

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

    return { isDesktop, isTablet, isMobile };
}

export default useMediaQuery;
