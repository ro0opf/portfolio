const Ball = (stageWidth, stageHeight, radius, speed) => {
    let vx = speed;
    let vy = speed;

    const diameter = radius * 2;
    let x = diameter + (Math.random() * stageWidth - diameter);
    let y = diameter + (Math.random() * stageHeight - diameter);

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
            vx += -1;
            x += vx;
        }else if(y <= minY || y >= maxY){
            vy += -1;
            y += vy;
        }
    }
}

export default Ball;