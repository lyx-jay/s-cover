import BoardStyles from "./BoardStyles";
import Tools from '../tools/Tools';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function Board() {
  return (
    <BrowserRouter>
      <BoardStyles className="container">
        <div className="board__wrapper">
          <div className="board__navigation">
            <Link to="/board/tools">Tool</Link>
            {/* <Link to="/board/logos">Logo</Link> */}

          </div>
          <div className="board__navigation__item">
            <Routes>
              <Route path="/board/tools" element={<Tools />} />

            </Routes>
          </div>
        </div>
      </BoardStyles>
    </BrowserRouter>
  )
}
