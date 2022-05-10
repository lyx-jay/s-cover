import { useState } from "react";
import LogoStyles from "./LogoStyles";
import { logoList } from "../../data/logoList";
// import Svga from '../../assets/logos/100tb.svg';

export default function Logo() {

  const [filterText, setfilterText] = useState('npm');

  function displayLogos(filterText: string): string[] {
    if (filterText === "") {
      return [];
    }
    return logoList.filter(logoName => logoName.includes(filterText))
  }

  const handleInputChange = (newValue: string) => {
    setfilterText(newValue);
  }
  return (
    <LogoStyles className="logo__wrapper">
      <div className="search__logo">
        <input type="text" value={filterText} onChange={(e) => handleInputChange(e.target.value)} />
        <span className="iconfont icon-search"></span>
      </div>
      <div className="search__results">
        {
          displayLogos(filterText).map(logoName => {
            return (
              <span>{logoName}</span>
            )
          })
        }
      </div>
    </LogoStyles>
  )
}
