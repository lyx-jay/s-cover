import { useEffect, useRef, useState } from 'react';
import DraftStyles from './DraftStyles';

type Location = {
  x: number;
  y: number;
}

let isDrawing: boolean = false;
const draw = (ctx: CanvasRenderingContext2D, location: Location) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.arc(location.x, location.y, 10, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
  }
}

export default function Draft() {

  const [location, setLocation] = useState({x: -1, y: -1})
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log(location)
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.fillStyle = 'hotpink';
    draw(ctx, location);
  })
  
  const updateLocation = (e:MouseEvent) => {
    const newLocation = {x: e.offsetX, y: e.offsetY}
    setLocation(newLocation)
  }
  

  return (
    <DraftStyles className='draft'>
      <div className="draft__wrapper">
        <canvas ref={canvasRef}
                onMouseMove={(e) => updateLocation(e.nativeEvent)}
                onMouseDown={() => {isDrawing = true}}
                onMouseUp={() => {isDrawing = false}}>
        </canvas>
      </div>
    </DraftStyles>
  )
}
