import { useEffect, useRef } from "react";
import { Cursor } from "../../styles/globalStyles";
// Styled Components


export const CustomCursor = () => {
  const cursor = useRef(null);

  const onMouseMove = event => {
    const { clientX, clientY } = event
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        className="hovered"
        ref = {cursor}
      />
    </>
  )
}

