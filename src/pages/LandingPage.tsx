import Board from "../components/board/Board";
import Draft from "../components/draft/Draft";
import Header from "../components/header/Header";
import styled from "styled-components";

const LandingPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  .content {
    height: calc(100vh - 5rem);
    display: flex;
  }
`





export default function LandingPage() {
  return (
    <LandingPageStyles>
      <Header />
      <div className="content">
        <Board />
        <Draft />
      </div>
    </LandingPageStyles>
  )
}
