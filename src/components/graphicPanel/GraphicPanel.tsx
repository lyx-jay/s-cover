import GraphicPanelStyles from './GraphicPanelStyles';
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { modifyProperty } from './graphicPanelSlice';


export default function GraphicPanel() {

  const dispatch = useAppDispatch();
  const [borderValue, setBorderValue] = useState(0);
  const [shadowValue, setShadowValue] = useState(0);
  const [offsetValue, setOffsetValue] = useState(0);
  const fill_colors:string[] = ['palette', '#38b6ff', '#8c52ff', '#cb6ce6', '#7ed957', '#c9e265', '#ffde59', '#ff914d', '#ff66c4','#000000' ];
  const border_colors:string[] = ['#5ce1e6', '#7ed957', '#ffde59', '#ff66c4'];
  const shadow_colors:string[] = ['#5ce1e6', '#7ed957', '#ffde59', '#ff66c4'];

  // TODO:REACT 中 鼠标事件类型用什么表示
  const handleInputValue = (e: any, type: string) => {
    switch (type) {
      case 'border':
        setBorderValue(e.target.value);
        break;
      case 'shadow':
        setShadowValue(e.target.value);
        break;
      case 'offset':
        setOffsetValue(e.target.value);
        break;
      default:
        break;
    }
    dispatch(modifyProperty(e.target.value, type))
  }

  return (
    <GraphicPanelStyles>
      <div className='graphic__color'>
        <span>填充</span>
        <div className='fill__colors'>
          {/* TODO:添加一个调色盘icon，把colors数组调整为9个 */}
          {
            fill_colors.map(fill_color => {
              return (
                <div className='color'
                     key={fill_color}
                     onClick={() => dispatch(modifyProperty(fill_color, 'fill'))}
                     style={{backgroundColor: `${fill_color}`}}></div>
              )
            })
          }
        </div>
      </div>
      <div className="graphic__border">
        <span>边框</span>
        <div className='border__settings'>
          <div className='width__slider'>
            <span>边框宽</span>
            <input type="range"
                   min={0}
                   max={20}
                   value={borderValue}
                   onChange={(e) => handleInputValue(e, 'border')}/>
          </div>
          <div className="border__colors">
            {
              border_colors.map(border_color => {
                return (
                  <div className='color'
                       key={border_color}
                       onClick={() => dispatch(modifyProperty(border_color, 'border'))}
                       style={{backgroundColor: `${border_color}`}}></div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="graphic__shadow">
        <span>阴影</span>
        <div className="shadow__settings">
          <div>
            <div className="shadow__width__slider">
              <span>宽度</span>
              <input type="range"
                   min={0}
                   max={20}
                   value={shadowValue}
                   onChange={(e) => handleInputValue(e, 'shadow')}/>
            </div>
            <div className="shadow__offset__slider">
              <span>偏移量</span>
              <input type="range"
                   min={0}
                   max={20}
                   value={offsetValue}
                   onChange={(e) => handleInputValue(e, 'offset')}/>
            </div>
            <div className="shadow__colors">
              {
                shadow_colors.map(shadow_color => {
                  return (
                    <div className='color'
                         key={shadow_color}
                         onClick={() => dispatch(modifyProperty(shadow_color, 'shadow'))}
                         style={{backgroundColor: `${shadow_color}`}}></div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </GraphicPanelStyles>
  )
}
