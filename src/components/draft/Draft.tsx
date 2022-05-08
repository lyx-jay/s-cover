import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectToolType } from '../toolsItem/toolsItemSlice';
import DraftStyles from './DraftStyles';

let originCanvas: fabric.Canvas;
let graphic: fabric.Object;

export default function Draft() {

  const toolType = useAppSelector(selectToolType);

  const [location, setLocation] = useState({ x: -10, y: -10 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const draftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const draftSize = draftRef.current!.getBoundingClientRect();
    const canvas = originCanvas ? originCanvas : new fabric.Canvas(canvasRef.current, {
      width: draftSize.width,
      height: draftSize.height,
    })
    if (!originCanvas) {
      originCanvas = canvas;
    }
    const rectOptions = {
      left: location.x,
      top: location.y,
      fill: 'red',
      width: 40,
      height: 40,
    }

    const radioOptions = {
      left: location.x,
      top: location.y,
      radius: 20,
      fill: 'pink'
    }
    if (toolType) {
      switch (toolType) {
        case 'juxing':
          graphic = new fabric.Rect(rectOptions)
          break;
        case 'radio-on':
          graphic = new fabric.Circle(radioOptions)
          break;
        default:
          break;
      }
      canvas.add(graphic);
    }
  }, [location])

  const updateLocation = (e: MouseEvent) => {
    const newLocation = { x: e.offsetX, y: e.offsetY };
    setLocation(newLocation);
  }


  return (
    <DraftStyles className='container'>
      <div className="draft__wrapper" ref={draftRef} onDoubleClick={(e) => updateLocation(e.nativeEvent)}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </DraftStyles>
  )
}
