/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
//Custom Hook
import useWindowSize from "../../hooks/useWindowSize";
//Context
//Styled Components

import video from "../../assets/Car-Club-1.mp4";
import {
  Banner,
  BannerTitle,
  Canvas,
  Headline,
  Video,
} from "../../styles/homeStyles";
import { ScrollDown } from "../ScrollDown";

const HomeBanner = ({ onCursor }) => {
  const size = useWindowSize();
  let canvas = useRef(null);

  useEffect(() => {
    let renderingElement = canvas.current;
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode();
    let drawingCtx = drawingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = "#000000";
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener("mouseover", (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("click", (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mouseup", (ev) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mousemove", (ev) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, []);

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <Banner>
      <Video>
        <video height="100%" width="100%" loop autoPlay muted src={video} />
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={container} initial="initial" animate="animate">
        <Headline variants={item}>
          We are a group of passionate car enthusiasts <br></br> gathering
          monthly to race, share techniques, <br></br>talk telemetry and
          horsepower, do repairs, <br></br> burnouts, the best hairpins, find
          the late apex <br></br> and overtake on the straights. All for the
          glory <br></br> of the checkered flag.<br></br> Join us.
        </Headline>
      </BannerTitle>

      <ScrollDown />
    </Banner>
  );
};

export default HomeBanner;
