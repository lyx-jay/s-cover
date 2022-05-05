import DraftStyles from './DraftStyles';

export default function Draft() {
  return (
    <DraftStyles className='draft'>
      <div className="draft__wrapper">
        <canvas></canvas>
      </div>
    </DraftStyles>
  )
}
