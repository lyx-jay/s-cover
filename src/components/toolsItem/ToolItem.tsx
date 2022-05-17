import { useAppDispatch } from '../../store/hooks';
import { toggleToolType } from './toolsItemSlice';
import ToolsItemStyles from "./ToolsItemStyles";

type PropsType = {
  fontClass: string
}

export default function ToolItem(props: PropsType) {

  const dispatch = useAppDispatch();
  // TODO:需要给每一个添加title属性，悬浮时显示文字
  return (
    <ToolsItemStyles
      className="tools__item"
      onClick={() => dispatch(toggleToolType(props.fontClass))}>
      <span className={`iconfont icon-${props.fontClass}`} title={props.fontClass}></span>
    </ToolsItemStyles>
  )
}
