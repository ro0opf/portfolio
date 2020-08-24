import React, { useState, useRef, useEffect } from 'react';
import { Wrapper } from './Home.css.js';


function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window
    const context = canvas.getContext('2d')
    canvas.width = width * ratio
    canvas.height = height * ratio
    context.scale(ratio, ratio)
    return true
  }

  return false
}



const Canvas = props => {
  const canvasRef = useRef(null);
  const speed = 5;
  const radius = 60;

  const [stageWidth, setStageWidth] = useState(document.body.clientWidth);
  const [stageHeight, setStageHeight] = useState(document.body.clientHeight);
  let vx = speed;
  let vy = speed;

  const diameter = radius * 2;
  let x = radius + (Math.random() * (stageWidth - diameter));
  let y = radius + (Math.random() * (stageHeight - diameter));

  const draw = (ctx, stageWidth, stageHeight) => {
    x += vx;
    y += vy;

    bounceWindow(stageWidth, stageHeight);

    ctx.fillStyle = '#fdd700';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  const bounceWindow = (stageWidth, stageHeight) => {
    const minX = radius;
    const maxX = stageWidth - radius;
    const minY = radius;
    const maxY = stageHeight - radius;

    if(x <= minX || x >= maxX){
        vx *= -1;
        x += vx;
    }else if(y <= minY || y >= maxY){
        vy *= -1;
        y += vy;
    }
}


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    const resize = () =>{
      setStageWidth(document.body.clientWidth);
      setStageHeight(document.body.clientHeight);
      canvas.height = stageHeight * 2;
      canvas.width = stageWidth * 2;
      ctx.scale(2, 2);
      console.log("update");
    };

    resize();

    //Our draw came here
    const render = () => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);
      draw(ctx, stageWidth, stageHeight);
      animationFrameId = window.requestAnimationFrame(render)
    }
    render();


    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />
}


function Home() {
  return (
    <Wrapper>
      <Canvas />
    </Wrapper>
  );
}

export default Home;
