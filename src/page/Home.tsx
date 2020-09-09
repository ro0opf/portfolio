import React, { useState, useRef, useEffect } from 'react'
import { Wrapper } from './Home.css'
import Ball from '../components/Ball'

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stageWidth, setStageWidth] = useState(document.body.clientWidth);
  const [stageHeight, setStageHeight] = useState(document.body.clientHeight);
  const ball = Ball(stageWidth, stageHeight, 60, 5);
  const ball2 = Ball(stageWidth, stageHeight, 60, 5);
  let frameId : number

  useEffect(() => {
    const canvas : HTMLCanvasElement = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

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
      frameId = window.requestAnimationFrame(render)
    }
    render();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(frameId);
    }
  }, );

  return (
    <canvas ref={canvasRef} />
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
