import React, { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 600px;
`;

const Photo = styled.div`
  background: url("/static/images/smash.jpg");
  background-position: center;
  width: 150px;
`;

const Description = styled.div`
  padding: 0px 20px;
  width: 450px;
`;

const Wrapper = styled.div``;

const WeekPlayer = ({ title, player }) => (
  <Wrapper>
    <h1>{title}</h1>
    <Container>
      <Photo />
      <Description>
        <h1>Smash</h1>
        <p>
          Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero
          la mayoría sufrió alteraciones en alguna manera, ya sea porque se le
          agregó humor, o palabras aleatorias que no parecen ni un poco
          creíbles.
        </p>
        <h3>Jugada destacada</h3>
        <iframe
          src="https://www.youtube.com/embed/nL4CTPzNz_o"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Description>
    </Container>
  </Wrapper>
);

export default WeekPlayer;
