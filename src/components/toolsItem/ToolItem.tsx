import ToolsItemStyles from "./ToolsItemStyles";

type PropsType = {
  fontClass: string
}

export default function ToolItem(props:PropsType) {
  return (
    <ToolsItemStyles className="tools__item">
      <span className={`iconfont icon-${props.fontClass}`}></span>
    </ToolsItemStyles>
  )
}
