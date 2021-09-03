import * as React from "react";
import styled from "styled-components";
import "./styles.scss";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import VideoInput from "./components/VideoInput";
import Home from "./components/pages/home";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Home />
        {/* <Container >
      <h1>Simple Calendar</h1>
      <Calendar />
    </Container>
<VideoInput /> */}
      </div>
    </div>
  );
}
