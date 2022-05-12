import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectToolType } from '../toolsItem/toolsItemSlice';
import { selectLogoName } from '../logo/logoSlice';
import { useLocation } from 'react-router-dom';
import DraftStyles from './DraftStyles';
import * as toolOptions from "../../utils/toolsOptions";

let originCanvas: fabric.Canvas;
let graphic: fabric.Object;

export default function Draft() {
  const path = useLocation();
  const toolType = useAppSelector(selectToolType);
  const logoName = useAppSelector(selectLogoName);
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

    if (path.pathname.includes('tool') && toolType) {
      switch (toolType) {
        case 'juxing':
          graphic = new fabric.Rect({...toolOptions.rectOptions, left:location.x, top:location.y})
          break;
        case 'radio-on':
          graphic = new fabric.Circle({...toolOptions.circleOptions, left: location.x, top: location.y})
          break;
        case 'text':
          graphic = new fabric.IText('Text', {...toolOptions.textOptions, left: location.x, top: location.y});
          break;
        case 'triangle':
          graphic = new fabric.Triangle({...toolOptions.triangleOptions, left: location.x, top: location.y});
          break;
        default:
          break;
      }
      canvas.add(graphic);
    }

    if (path.pathname.includes('logo') && logoName) {
      fabric.Image.fromURL(logoName, function(oImg) {
        canvas.add(oImg);
      }, {...toolOptions.imageOptions, left: location.x, top: location.y});
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
