import { useState } from "react";
import LogoStyles from "./LogoStyles";
import { logoList } from "../../data/logoList";

export default function Logo() {

  const [filterText, setfilterText] = useState('react');
  const displayLogos: string[] = filterText !== "" ? logoList.filter(logoName => logoName.includes(filterText)) : []
  console.log(displayLogos)
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
          displayLogos.length !== 0 && displayLogos.map(logoName => {
            const path = require(`../../assets/logos/${logoName}.svg`);
            return (
              <img key={logoName} src={path} alt='' title={logoName}/>
            )
          })
        }
      </div>
    </LogoStyles>
  )
}
