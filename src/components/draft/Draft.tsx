import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import * as toolOptions from "../../utils/toolsOptions";
import { selectGraphicPropertyName, selectGraphicPropertyValue } from '../graphicPanel/graphicPanelSlice';
import { selectLogoName } from '../logo/logoSlice';
import { selectToolType } from '../toolsItem/toolsItemSlice';
import DraftStyles from './DraftStyles';

let graphic: fabric.Object;
let lastToolType: string;
let graphicsSet = new Set();   // 集合中仅有0或1个元素

export default function Draft() {

  const path = useLocation();
  const propertyName = useAppSelector(selectGraphicPropertyName);
  const propertyValue = useAppSelector(selectGraphicPropertyValue);
  const toolType = useAppSelector(selectToolType);
  const logoName = useAppSelector(selectLogoName);
  const [location, setLocation] = useState({ x: 10, y: 10 })
  const draftRef = useRef<HTMLDivElement | null>(null);

  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const initCanvas = () => {
    const draftSize = draftRef.current!.getBoundingClientRect();
    console.log(draftSize)
    const canvas = new fabric.Canvas('canvas');
    canvas.setWidth(draftSize.width);
    canvas.setHeight(draftSize.height);
    return canvas;
  };

  const addGraphicsToCanvas = (toolType: string, location: { x: number, y: number }) => {
    if (path.pathname.includes('graphics') && toolType) {
      switch (toolType) {
        case 'juxing':
          graphic = new fabric.Rect({ ...toolOptions.rectOptions, left: location.x, top: location.y })
          break;
        case 'radio-on':
          graphic = new fabric.Circle({ ...toolOptions.circleOptions, left: location.x, top: location.y })
          break;
        case 'triangle':
          graphic = new fabric.Triangle({ ...toolOptions.triangleOptions, left: location.x, top: location.y })
          break;
        case 'text':
          graphic = new fabric.IText('TEXT', {...toolOptions.textOptions, left: location.x, top: location.y})
          break;
        default:
          break;
      }
      canvas!.add(graphic);
      canvas?.setActiveObject(canvas?.getObjects()[canvas?.getObjects().length - 1])
      graphicsSet.add(toolType);
    }
  }

  const addLogoToCanvas = (logoName: string, location: { x: number, y: number }) => {
    if (path.pathname.includes('logo') && logoName) {
      fabric.Image.fromURL(logoName, function (oImg) {
        canvas!.add(oImg);
      }, { ...toolOptions.imageOptions, left: location.x, top: location.y });
    }
  }

  // TODO:选中canvas上的object，board面板切换对应的panel
  // NOTE:仅在组件挂载时，执行一次
  useEffect(() => {
    setCanvas(initCanvas());
  }, [])

  // 通过鼠标位置更新绘图
  useEffect(() => {
    // 绘制图形
    addGraphicsToCanvas(toolType, location)
    // 绘制logo
    addLogoToCanvas(logoName, location);
  }, [location])

  // 更新图形属性, 处于选中状态才去修改属性
  useEffect(() => {
    const updateGraphicProperty = (propertyName: string, propertyValue: any, obj: fabric.Object) => {
      switch (propertyName) {
        case 'fill':
          obj.set('fill', propertyValue);
          break;
        case 'stroke':
          obj.set('stroke', propertyValue);
          break;
        case 'strokeWidth':
          obj.set('strokeWidth', parseInt(propertyValue));
          break;
        default:
          break;
      }
    }
    // 当canvas存在且存在选中对象时，才能触发
    if (canvas && canvas!.getActiveObject()) {
      let activeObject = canvas!.getActiveObject();
      updateGraphicProperty(propertyName, propertyValue, activeObject);
      canvas.renderAll();
    }
  }, [propertyName, propertyValue])


  const updateLocation = (e: MouseEvent) => {
    const newLocation = { x: e.offsetX, y: e.offsetY };
    setLocation(newLocation);
  }

  return (
    <DraftStyles>
      <div className="draft__wrapper" ref={draftRef} onDoubleClick={(e) => updateLocation(e.nativeEvent)}>
        <canvas id="canvas"></canvas>
      </div>
    </DraftStyles>
  )
}
