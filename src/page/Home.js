import React, { useState, useRef, useEffect } from 'react';
import { Wrapper } from './Home.css.js';
import Ball from '../components/Ball.js';

const Canvas = props => {
  const canvasRef = useRef(null);
  const [stageWidth, setStageWidth] = useState(document.body.clientWidth);
  const [stageHeight, setStageHeight] = useState(document.body.clientHeight);
  const ball = Ball(canvasRef, stageWidth, stageHeight, 60, 5);
  const ball2 = Ball(canvasRef, stageWidth, stageHeight, 60, 5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () =>{
      setStageWidth(document.body.clientWidth);
      setStageHeight(document.body.clientHeight);
      canvas.height = stageHeight * 2;
      canvas.width = stageWidth * 2;
      ctx.scale(2, 2);
    };

    resize();

    const render = () => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);
      const {vx : x1, vy : y1} = ball.draw(ctx, stageWidth, stageHeight);
      const {vx : x2, vy : y2} = ball2.draw(ctx, stageWidth, stageHeight);

      console.log(x1);
      console.log(x2);
      ball.addVx(2);
      window.requestAnimationFrame(render);
    }
    render();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(render);
    }
  }, );

  return (
    <canvas ref={canvasRef} {...props}/>
  )
}


function Home() {
  return (
    <Wrapper>
      <Canvas />
    </Wrapper>
  );
}

export default Home;
