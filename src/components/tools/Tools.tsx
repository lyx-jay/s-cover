import ToolStyles from './ToolStyles';
import ToolItem from '../toolsItem/ToolItem';

export default function tools() {
  return (
    <ToolStyles className='toos_wrapper'>
      <ToolItem fontClass='juxing'/>
      <ToolItem fontClass='radio-on'/>
      <ToolItem fontClass='text'/>
      <ToolItem fontClass='triangle'/>
    </ToolStyles>
  )
}
