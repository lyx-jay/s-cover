import { useEffect, useRef, useState } from 'react';
import DraftStyles from './DraftStyles';

type Location = {
  x: number;
  y: number;
}

// let isDrawing: boolean = false;
const draw = (ctx: CanvasRenderingContext2D, location: Location) => {
  ctx.fillText('hello world', location.x, location.y);
}

export default function Draft() {

  const [location, setLocation] = useState({ x: -1, y: -1 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // console.log(location)
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.font = '48px serif';
    draw(ctx, location);
  }, [location])

  const updateLocation = (e: MouseEvent) => {
    // console.log(e)
    const newLocation = { x: e.offsetX, y: e.offsetY }
    setLocation(newLocation)
  }


  return (
    <DraftStyles className='draft'>
      <div className="draft__wrapper">
        <canvas ref={canvasRef}
          onClick={(e) => updateLocation(e.nativeEvent)}
        >
        </canvas>
      </div>
    </DraftStyles>
  )
}
