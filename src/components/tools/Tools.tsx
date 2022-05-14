import ToolStyles from './ToolStyles';
import ToolItem from '../toolsItem/ToolItem';

export default function Tools() {
  return (
    <ToolStyles className='tools_wrapper'>
      <ToolItem fontClass='juxing'/>
      <ToolItem fontClass='radio-on'/>
      <ToolItem fontClass='text'/>
      <ToolItem fontClass='triangle'/>
    </ToolStyles>
  )
}
