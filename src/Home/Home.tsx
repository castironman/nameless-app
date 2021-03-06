import React from "react";
import styled from "styled-components/macro";
import {
  StyledContainer,
  Header,
  headerSpringProps,
} from "../Style/Stuff";
import { Button } from "../Style/Button";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Icon from "../Style/Icon";

type Props = {};

export function Home(props: Props): JSX.Element {
  const springProps = useSpring(headerSpringProps);

  return (
    <>
      <Header maxWidth="md">
        {/* <Icon icon="home" colour="#61DAFB" /> */}
        <animated.h1 style={springProps}>Home</animated.h1>
      </Header>
      <StyledContainer maxWidth="md">
        <Body>
          <StyledLink to="/bio">
            <Button label="Auto-Biography" />
          </StyledLink>
          <StyledLink to="/portfolio">
            <Button label="Portfolio" />
          </StyledLink>
        </Body>
      </StyledContainer>
    </>
  );
}

export default Home;

const Body = styled.div`
  padding: 25px;
  min-height: 75vh;
  background: ${({ theme }) => theme.colours.honeyDew};
  border: 1px solid ${({ theme }) => theme.colours.quickSilver};
  border-radius: 4px;
  margin-top: 12px;
`;

const StyledLink = styled(Link)`
  margin: 2.6rem 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

