import BoardStyles from "./BoardStyles";
import Tools from '../tools/Tools';
import Logo from "../logo/Logo";
import { Route, Routes } from 'react-router-dom';

export default function Board() {
  return (
    <BoardStyles>
      <div className="board__wrapper">
        <div className="board__items">
          <Routes>
            <Route path="/" element={<Logo />} />
            <Route path="/board/logos" element={<Logo />} />
          </Routes>
        </div>
      </div>
    </BoardStyles>
  )
}
