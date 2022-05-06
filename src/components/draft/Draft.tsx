import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import DraftStyles from './DraftStyles';

// type Location = {
//   x: number;
//   y: number;
// }

// // let isDrawing: boolean = false;
// const draw = (ctx: CanvasRenderingContext2D, location: Location) => {
//   ctx.fillText('hello world', location.x, location.y);
// }

export default function Draft() {

  const [location, setLocation] = useState({ x: -1, y: -1 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const draftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const draftSize = draftRef.current!.getBoundingClientRect();
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: draftSize.width,
      height: draftSize.height,
    })
    const rect = new fabric.Rect({
      left: location.x,
      top: location.y,
      fill: 'red',
      width: 40,
      height: 40,
    })
    canvas.add(rect);
  }, [location])

  const updateLocation = (e: MouseEvent) => {
    const newLocation = { x: e.offsetX, y: e.offsetY }
    setLocation(newLocation)
  }


  return (
    <DraftStyles className='container'>
      <div className="draft__wrapper" ref={draftRef}>
        <canvas ref={canvasRef}
          onClick={(e) => updateLocation(e.nativeEvent)}
        >
        </canvas>
      </div>
    </DraftStyles>
  )
}
