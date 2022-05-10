import LogoStyles from "./LogoStyles";
import Svga from '../../assets/logos/100tb.svg';
// const svga = require("../../assets/logos/100tb.svg") as string;

export default function Logo() {
  return (
    <LogoStyles className="logo__wrapper">
      <div className="search__logo">
        <input type="text" />
        <span className="iconfont icon-search"></span>
      </div>
      <img src={Svga} alt="" />
    </LogoStyles>
  )
}
