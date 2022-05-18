import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectToolType } from '../toolsItem/toolsItemSlice';
import { selectLogoName } from '../logo/logoSlice';
import { selectGraphicPropertyName, selectGraphicPropertyValue } from '../graphicPanel/graphicPanelSlice'
import { useLocation } from 'react-router-dom';
import DraftStyles from './DraftStyles';
import * as toolOptions from "../../utils/toolsOptions";
import {RectOptions} from "../../utils/toolsOptions";

let originCanvas: fabric.Canvas;
let graphic: fabric.Object;

export default function Draft() {

  const path = useLocation();
  const propertyName = useAppSelector(selectGraphicPropertyName);
  const propertyValue = useAppSelector(selectGraphicPropertyValue);
  const toolType = useAppSelector(selectToolType);
  const logoName = useAppSelector(selectLogoName);
  const [location, setLocation] = useState({ x: -10, y: -10 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const draftRef = useRef<HTMLDivElement | null>(null);

  function mergeToolOptions (originOptions: RectOptions, location: {x: number, y: number}, propertyName:string, propertyValue: any): RectOptions  {
     switch (propertyName) {
       case 'border_color':
         return {...originOptions, left: location.x, top: location.y, stroke:propertyValue}
       case 'border_width':
         return {...originOptions, left: location.x, top: location.y, strokeWidth:propertyValue}
      //  case 'shadow_color':
      //    return {...originOptions, left: location.x, top: location.y, stroke:propertyValue}
      //    break;
      //  case 'border_color':
      //    return {...originOptions, left: location.x, top: location.y, stroke:propertyValue}
      //    break;
      //  case 'border_color':
      //    return {...originOptions, left: location.x, top: location.y, stroke:propertyValue}
      //    break;
       default:
         return {...originOptions, left: location.x, top: location.y}
     }
  }


  useEffect(() => {
    const draftSize = draftRef.current!.getBoundingClientRect();
    const canvas = originCanvas ? originCanvas : new fabric.Canvas(canvasRef.current, {
      width: draftSize.width,
      height: draftSize.height,
    })
    if (!originCanvas) {
      originCanvas = canvas;
    }
    //TODO: 在添加图形属性面板之后，这里需要添加路由判断，以避免重复绘制问题
    // FIXME:修改属性会导致绘制多个图形, 绘制属性时修改原先的图形。只有在鼠标位置发生变化时才重新创建一个graphic
    if (toolType) {
      switch (toolType) {
        case 'juxing':
          // graphic = new fabric.Rect({...toolOptions.rectOptions, left:location.x, top:location.y})
          graphic = new fabric.Rect(mergeToolOptions(toolOptions.rectOptions, location, propertyName, propertyValue))
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
  }, [location, propertyValue])

  const updateLocation = (e: MouseEvent) => {
    const newLocation = { x: e.offsetX, y: e.offsetY };
    setLocation(newLocation);
  }

  return (
    <DraftStyles>
      <div className="draft__wrapper" ref={draftRef} onDoubleClick={(e) => updateLocation(e.nativeEvent)}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </DraftStyles>
  )
}
