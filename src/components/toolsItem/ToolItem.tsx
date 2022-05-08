import { useAppDispatch } from '../../store/hooks';
import { toggleToolType } from './toolsItemSlice';
import ToolsItemStyles from "./ToolsItemStyles";

type PropsType = {
  fontClass: string
}

export default function ToolItem(props: PropsType) {

  const dispatch = useAppDispatch();

  return (
    <ToolsItemStyles
      className="tools__item"
      onClick={() => dispatch(toggleToolType(props.fontClass))}>
      <span className={`iconfont icon-${props.fontClass}`}></span>
    </ToolsItemStyles>
  )
}
