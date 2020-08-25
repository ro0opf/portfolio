import {useState} from "react";

function Ball(canvasRef, stageWidth, stageHeight, radius, speed) {
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

        return {x,y, vx, vy};
    }

    const bounceWindow = (stageWidth, stageHeight) => {
        const minX = radius;
        const maxX = stageWidth - radius;
        const minY = radius;
        const maxY = stageHeight - radius;

        if (x <= minX || x >= maxX) {
            vx *= -1;
            x += vx;
        } else if (y <= minY || y >= maxY) {
            vy *= -1;
            y += vy;
        }
    }

    function addVx(value){
        vx += value;
    }
    return {draw, addVx};
}


export default Ball;