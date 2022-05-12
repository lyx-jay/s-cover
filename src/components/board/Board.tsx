import BoardStyles from "./BoardStyles";
import Tools from '../tools/Tools';
import Logo from "../logo/Logo";
import { Link, Route, Routes } from 'react-router-dom';

export default function Board() {
  return (
    <BoardStyles className="container">
      <div className="board__wrapper">
        <div className="board__navigation">
          <Link to="/board/tools">TOOL</Link>
          <Link to="/board/logos">LOGO</Link>
        </div>
        <div className="board__navigation__item">
          <Routes>
            <Route path="/" element={<Tools />} />
            <Route path="/board/tools" element={<Tools />} />
            <Route path="/board/logos" element={<Logo />} />
          </Routes>
        </div>
      </div>
    </BoardStyles>
  )
}
