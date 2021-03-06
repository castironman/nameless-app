import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  Top,
  StyledContainer,
  Header,
  headerSpringProps,
  Body,
} from "../Style/Stuff";
import { useSpring, animated, interpolate } from "react-spring";
import Dashwund from "../img/dashwund.jpg";
import Texture from "../img/paper.png";
import Back from "../Style/StyledBack";

type Props = {
  isFlipped?: boolean;
};
export function Bio(props: Props): JSX.Element {
  const [flipped, set] = useState<boolean>(props.isFlipped ?? false);
  const [canClick, setCanClick] = useState<boolean>(true);
  const {
    transform,
  } = useSpring({
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 900, friction: 100 },
  });

  const headerProps = useSpring(headerSpringProps);

  const rotateContainer = () => {
    if (!flipped && canClick) {
      return transform;
    } else {
      return transform.interpolate((t) => `${t} rotateX(180deg)`);
    }
  };

  const Text = (): JSX.Element => {
    if (!flipped && canClick) {
      return (
        <>
          <SubHeadingCont>
            <H4>Intro</H4>
          </SubHeadingCont>
          <p className="cursive">
            Welcome, this is where I tell my story. It's short and uninspiring,
            so no need to get all worked up just yet. I'm a Software Developer
            and I'm currently pursuing life as a video game. Gathering resources
            and useful hobbies along the path. Are you perhaps interested, in
            learing more?
          </p>
          <p style={{ textAlign: "right" }} className="cursive">
            - Limon
          </p>
        </>
      );
    } else {
      return (
        <>
          <SubHeadingCont>
            <H4>Flip Side</H4>
          </SubHeadingCont>
          <p className="cursive">End of Line, Pal.</p>
        </>
      );
    }
  };

  const handleOnClick = () => {
    setCanClick(false);
    setTimeout(() => {
      set((state) => !state);
    }, 50);
    setCanClick(true);
  };

  return (
    <>
      <Header maxWidth="md">
        <animated.h1 style={headerProps}>Biography</animated.h1>
      </Header>
      <StyledContainer maxWidth="md">
        <Body onClick={handleOnClick} role="clickable">
          <Back />
          <FlipContainer>
            <TextContainer
              style={{ transform: rotateContainer() }}
              flipped={flipped ? 1 : 0}
            >
              {Text()}
            </TextContainer>
          </FlipContainer>
        </Body>
      </StyledContainer>
    </>
  );
}

export default Bio;

const FlipContainer = styled.div`
  position: relative;
`;
const TextContainer = styled(animated.div)<{ flipped: number }>`
  color: ${({ flipped }) => (flipped === 1 ? "#fff" : `#fff`)};
  padding: 24px;
  background: ${({ theme, flipped }) =>
    flipped === 1
      ? `url(${Dashwund}), black`
      : `url(${Texture}), ${theme.colours.orangePeel}`};
  background-size: ${({ flipped }) => (flipped === 1 ? "auto 100%" : "auto")};
  background-repeat: ${({ flipped }) =>
    flipped === 1 ? "no-repeat" : "repeat"};
  background-position: center;
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
  }
`;

const SubHeadingCont = styled.div`
  margin: 0 5px 20px 5px;
  padding: 0;
`;

const H4 = styled.h2`
  && {
    color: ${({ theme }) => theme.colours.honeydew};
  }
`;
