import * as React from "react";

function useScrollTo({ condition }: { condition: boolean }) {
  const ref = React.useRef<HTMLDivElement>(null);

  function triggerScroll() {
    if (condition) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  React.useEffect(() => {
    if (condition) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [condition]);

  return { ref, triggerScroll };
}

export default useScrollTo;
