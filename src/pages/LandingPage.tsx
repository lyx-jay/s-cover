import Board from "../components/board/Board";
import Draft from "../components/draft/Draft";
import Header from "../components/header/Header";
import styled from "styled-components";

const LandingPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .content {
    flex: 1;
    width: 100%;
    height: calc(100vh - 5rem);
    display: flex;
    gap: 1rem;
    padding: 1rem;
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
