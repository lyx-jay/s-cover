import BoardStyles from "./BoardStyles";
import Logo from "../logo/Logo";
import { Route, Routes } from 'react-router-dom';
import GraphicPanel from "../graphicPanel/GraphicPanel";

export default function Board() {
  return (
    <BoardStyles>
      <div className="board__wrapper">
        <div className="board__items">
          <Routes>
            <Route path="/" element={<Logo />} />
            <Route path="/board/logos" element={<Logo />} />
            <Route path="/board/graphics" element={<GraphicPanel />} />
          </Routes>
        </div>
      </div>
    </BoardStyles>
  )
}
