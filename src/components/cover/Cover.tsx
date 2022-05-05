import CoverStyles from "./CoverStyles";
import Board from "../board/Board";
import Draft from "../draft/Draft";


export default function Cover() {
  return (
    <CoverStyles className="container">
      <div className="cover__wrapper">
        <Board />
        <Draft />
      </div>
    </CoverStyles>
  )
}
