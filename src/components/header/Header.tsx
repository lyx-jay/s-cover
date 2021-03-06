import HeaderStyles from "./HeaderStyles";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import { Link } from "react-router-dom";
import Tools from "../tools/Tools";

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">Simple Cover</div>
          <div className="header__menu">
            <Link to="/board/logos">LOGO</Link>
            <Tools />
          </div>
          <div className="header__categories">
            <a href="https://github.com/lyx-jay" className="category__item" target="_blank" rel="noreferrer" title="Github">
              <span className="iconfont icon-github"></span>
            </a>
            <a href="https://lyx-jay.github.io/Blog/" className="category__item" target="_blank" rel="noreferrer" title="Blog">
              <span className="iconfont icon-blog"></span>
            </a>
            <a href="/" className="category__item" title="Projects">
              <span className="iconfont icon-project-solid-list"></span>
            </a>
            <ThemeSwitcher className="category__item" title="theme"/>
          </div>
        </div>
      </div>
    </HeaderStyles>
  )
}
