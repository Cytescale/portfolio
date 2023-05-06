import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
  useLayoutEffect,
  useCallback,
} from "react";

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
});

export const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      {/* <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div> */}
      <div className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};
export default DotRing;
