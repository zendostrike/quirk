import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #fff;
  padding: 0px 20px;
  margin: 15px 0px;
  border-radius: 20px;
  border: 2px solid #7835ec;
`;

const NewsBox = ({ title }) => (
  <Container>
    <h3>{title}</h3>
    <p style={{ color: "#7835ec" }}>
      ya sea porque se le agregó humor, o palabras aleatorias
    </p>
  </Container>
);

export default NewsBox;
