import { useState } from "react";
import LogoStyles from "./LogoStyles";
import { logoList } from "../../data/logoList";
// import a from '../../assets/logos/100tb.svg';

console.log(require(`../../assets/logos/100tb.svg`).default)
console.log(require(`../../assets/logos/100tb.svg`))

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
            const path = require(`../../assets/logos/${logoName}.svg`);
            console.log(path)
            return (
              <img key={logoName} src={path} alt="" />
            )
          })
        }
      </div>
    </LogoStyles>
  )
}
