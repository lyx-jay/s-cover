import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useAppSelector } from '../../store/hooks';
import { selectToolType } from '../toolsItem/toolsItemSlice';
import DraftStyles from './DraftStyles';


export default function Draft() {

  const toolType = useAppSelector(selectToolType);

  console.log(toolType)

  const [location, setLocation] = useState({ x: 10, y: 10 })
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
    console.log(1)
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
